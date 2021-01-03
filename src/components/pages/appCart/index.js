import template from './template'
import styles from './styles'

import appBreadCrumbs from '../../appBreadCrumbs'
import appSearch from '../../appSearch'
import appCartItem from '../../appCartItem'

const appCart = () => {

    const state = {}

    const children = () => ({
        appBreadCrumbs,
        appSearch,
        appCartItem
    })

    return {
        state,
        template,
        styles,
        children
    }
}


export default appCart