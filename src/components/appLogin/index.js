import template from './template'
import styles from './styles'

import appSimpleLogin from '../appSimpleLogin'

const appLogin = () => {

    const state = {
        title: 'AppLogin'
    }

    const children = () => ({
        appSimpleLogin
    })
    return {
        state,
        template,
        styles,
        children
    }
}

export default appLogin