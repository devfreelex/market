import template from './template'
import styles from './styles'

import appSearch from '../../appSearch'
import appProduct from '../../appProduct'
import appBreadCrumbs from '../../appBreadCrumbs'

const appCategory = () => {

    const state = {}

    const children = () => ({
        appBreadCrumbs,
        appSearch,
        appProduct
    })

    return {
        state,
        template,
        styles,
        children
    }
}

export default appCategory