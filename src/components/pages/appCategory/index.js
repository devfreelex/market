import template from './template'
import styles from './styles'

import appSearch from '../../appSearch'
import appProduct from '../../appProduct'

const appCategory = () => {

    const state = {}

    const children = () => ({
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