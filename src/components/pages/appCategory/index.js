import template from './template'
import styles from './styles'

import appSearch from '../../appSearch'
import appCategoryItem from '../../appCategoryItem'
import appCarousel from '../../appCarousel'

const appCategory = () => {

    const state = { title: 'Page category' }

    const children = () => ({
        appSearch,
        appCategoryItem,
        appCarousel
    })

    return {
        state,
        template,
        styles,
        children
    }
}

export default appCategory