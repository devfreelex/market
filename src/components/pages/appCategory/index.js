import template from './template'
import styles from './styles'

import appSearch from '../../appSearch'
import appCategoryItem from '../../appCategoryItem'
import appCarousel from '../../appCarousel'

import { authStore } from '../../../store'
import authFactory from '../../../services/auth.factory'
import authService from '../../../services/auth.factory'

const appCategory = () => {

    const state = { title: 'Page category', expiration: 90 }

    const hooks = ({ methods }) => ({
        beforeOnInit () {
            const interval = 1000 * 60
            const timer = setInterval(() => {
                methods.validateToken(timer)
                methods.updateExpirationTime()
            }, interval)
        },
        beforeOnRender () {
            methods.validateToken()
        }
    })

    const children = () => ({
        appSearch,
        appCategoryItem,
        appCarousel
    })

    const methods = ({ getState, setState }) => ({
        validateToken (timer) {
            const { token } = authStore.get()
            const isValidToken = authService.validateToken(token)
            if(isValidToken) return

            clearInterval(timer)
            authStore.update({ token: ''})
            window.location.hash = '#/'
        },
        updateExpirationTime () {
            const { expiration } = getState()
            setState({ expiration: +expiration - 1})
        }
    })

    return {
        state,
        template,
        styles,
        children,
        hooks,
        methods
    }
}

export default appCategory