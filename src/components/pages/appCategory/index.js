import template from './template'
import styles from './styles'

import appSearch from '../../appSearch'

const appCategory = () => {

    const state = {}

    const children = () => ({
        appSearch
    })

    return {
        state,
        template,
        styles,
        children
    }
}

export default appCategory