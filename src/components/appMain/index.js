import template from './template'
import styles from './styles'

const appMain = () => {

    const state = {
        title: 'appMain'
    }

    const children = () => ({})

    const hooks = ({state}) => ({
        afterOnInit () {

        }
    })

    return {
        state,
        template,
        styles,
        hooks,
        children
    }
}

export default appMain