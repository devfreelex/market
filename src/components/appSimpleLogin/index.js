import template from './template'
import styles from './styles'

import { authStore } from '../../store'
import  authService  from '../../services/auth.factory'

const appSimpleLogin = () => {

    const state = {
        email:'',
        password:''
    }

    const hooks = ({ methods }) => ({
        beforeOnInit () {
            authStore.on(methods.loadHome)
        }
    })

    const events = ({ on, queryOnce, methods }) => ({
        onTypeEmail () {
            const emailInput = queryOnce('#email')
            on('keyup', emailInput, methods.setEmail, true, 500)
        },
        onTypePassword () {
            const passwordInput = queryOnce('#password')
            on('keyup', passwordInput, methods.setPassword, true, 500)
        },
        onClickButton () {
            const button = queryOnce('#btnLogin')
            on('click', button, methods.authenticate)
        }
    })

    const methods = ({ setState, getState }) => ({
        setEmail ({ target }) {
            const { value: email } = target
            const state = getState()
            const payload = Object.assign(state, { email })
            setState(payload)
        },
        setPassword ({ target }) {
            const { value: password } = target
            const state = getState()
            const payload = Object.assign(state, { password })
            setState(payload)
        },
        updateState (dataStore) {

        },
        authenticate () {
            const state = getState()
            const token = authService.authenticate(state)
            if(token) authStore.update({ token })

        },
        loadHome () {
            const data = authStore.get()
            if(!data.token) return
            window.location.hash = '#/home'
        }
    })

    return {
        state,
        template,
        styles,
        hooks,
        events,
        methods
    }
}

export default appSimpleLogin