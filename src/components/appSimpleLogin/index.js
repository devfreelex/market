import template from './template'
import styles from './styles'

import { authStore } from '../../store'
import  authService  from '../../services/auth.factory'

const appSimpleLogin = () => {

    const state = {
        email:'',
        password:''
    }

    const props = {
        validation: {
            email: null,
            password: null,
            enableButton: false
        },
    }

    const hooks = ({ methods }) => ({
        beforeOnInit () {
            authStore.on(methods.isValidAuth)
        }
    })

    const events = ({ on, queryOnce, methods }) => ({
        onTypeEmail () {
            const emailInput = queryOnce('#email')
            on('keyup', emailInput, ({target}) => {
                methods.setEmail(target)
                methods.toggleButton()
                methods.setFocus(target, queryOnce)
            }, true, 100)
        },
        onTypePassword () {
            const passwordInput = queryOnce('#password')
            on('keyup', passwordInput, ({target}) => {
                methods.setPassword(target)
                methods.toggleButton()
                methods.setFocus(target, queryOnce)
            }, true, 100)
        },
        onClickButton () {
            const button = queryOnce('#btnLogin')
            on('click', button, methods.authenticate)
        }
    })

    const methods = ({ setState, getState, getProps, setProps }) => {

        const _setCursorPosition = (element) => {
            const textLength = element.value.length

            if (typeof element.selectionStart == "number") {
                element.focusStart = textLength
                element.focusEnd = textLength
            }   
            
            element.setSelectionRange(textLength, textLength + 1)
            element.focus()
        }

        const _emailValidate = (target, key) => {
            if(!key || key !== 'email') return

            const props = getProps()
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            const isValid = emailPattern.test(target.value)
            const validation = props.validation
            
            if(isValid) {
                validation.email = 'validInput'
                const payload = { ...props, ...{ validation }}
                return setProps(payload)
            }

            validation.email = 'invalidInput'
            const payload = { ...props, ...{ validation }}
            return setProps(payload)            

        }
        const _passwordValidate = (target, key) => {
            if(!key || key !== 'password') return

            const props = getProps()
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
            const isValid = passwordPattern.test(target.value)
            const validation = props.validation

            if(isValid) { 
                validation.password = 'validInput'
                const payload = { ...props, ...{ validation }}
                return setProps(payload)
            }

            validation.password = 'invalidInput'
            const payload = { ...props, ...{ validation }}
            return setProps(payload)    
        }

        const _setValidationClass = (target, key) => {
            _emailValidate(target, key)
            _passwordValidate(target, key)
        }

        const setFocus = (target, queryOnce) => {
            const selector = `#${target.getAttribute('id')}`
            const element = queryOnce(selector)
            _setCursorPosition(element)
        }

        const setEmail = (target) => { 
            const { value: email } = target
            const state = getState()
            const payload = Object.assign(state, { email })
            setState(payload)
            _setValidationClass(target, 'email')
        }

        const setPassword = (target) => {
            const { value: password } = target
            const state = getState()
            const payload = Object.assign(state, { password })
            setState(payload)
            _setValidationClass(target, 'password')
        }

        const authenticate = () => {
            const state = getState()
            const token = authService.authenticate(state)
            if(token) authStore.update({ token })

        }

        const isValidAuth = () => {
            const token = authStore.get('token')
            const isValidToken = authService.validateToken(token)
            if(isValidToken) {
                setState({ email: '', password: ''})
                window.location.hash = '#/home'
            }
        }

        const toggleButton = () => {
            const props = getProps()

            const { email, password } = props.validation
            const validation = props.validation
            const isValid = email === 'validInput' && password === 'validInput' 

            if(isValid) { 
                validation.enableButton = true
                const payload = { ...props, ...{ validation }}
                return setProps(payload)
            }

            validation.enableButton = false
            const payload = { ...props, ...{ validation }}
            return setProps(payload)    

        }

        return {
            setEmail,
            setPassword,
            authenticate,
            isValidAuth,
            setFocus,
            toggleButton
        }
    }

    return {
        state,
        props,
        template,
        styles,
        hooks,
        events,
        methods
    }
}

export default appSimpleLogin