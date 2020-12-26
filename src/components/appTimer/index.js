import template from './template'
import styles from './styles'

import { authStore } from '../../store'
import authService from '../../services/auth.factory'


const appTimer = () => {

    const state = {
        expirationTime: 90,
        lastMinutes: false
    }

    const hooks = ({ methods }) => ({
        beforeOnInit () {
            methods.validateOnTokenChange()
            methods.redoAuthentication()
            methods.initTimer()
        }
    })

    const methods = ({ getState, setState }) => {
        const _validateToken = (timer) => {
            
            const token = authStore.get('token')
            const isValidToken = authService.validateToken(token)
            if(isValidToken) return

            redoAuthentication(timer)
        }     

        const _updateExpirationTime = () => {
            const { expirationTime } = getState()
            setState({ expirationTime: +expirationTime - 1})
        }        

        const initTimer = () => {
            const interval = 1000 * 60
            const timer = setInterval(() => {
                _validateToken(timer)
                _updateExpirationTime()
            }, interval)
        }

        const redoAuthentication = (timer) => {
            const token  = authStore.get('token')
            const isValidToken = authService.validateToken(token)
            if(isValidToken) return
            
            authService.redoAuthentication(() => {
                clearInterval(timer)
                authStore.update({ token: ''})                
                window.location.hash = '#/'
            })
        }   
        
        const validateOnTokenChange = () => {
            authStore.on(({token}) => {
                if(!!token && authService.validateToken(token)) return
                window.location.hash = '#/'
            })
        }

        return {
            initTimer,
            redoAuthentication,
            validateOnTokenChange
        }
        
    }

    return {
        state,
        template,
        styles,
        hooks,
        methods
    }
}

export default appTimer