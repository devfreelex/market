import template from './template'
import styles from './styles'

import appBreadCrumbs from '../../appBreadCrumbs'

const appCart = () => {

    const state = {}

    const children = () => ({
        appBreadCrumbs
    })

    return {
        state,
        template,
        styles,
        children
    }
}


export default appCart