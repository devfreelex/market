import template from './template'
import styles from './styles'

const appSimpleLogin = () => {

    const state = {
        title: 'Simple Login'
    }

    return {
        state,
        template,
        styles
    }
}

export default appSimpleLogin