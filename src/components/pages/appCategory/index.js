import template from './template'
import styles from './styles'

import appSearch from '../../appSearch'
import appCategoryItem from '../../appCategoryItem'
import appCarousel from '../../appCarousel'
import appTimer from '../../appTimer'

const appCategory = () => {

    const state = {}

    const children = () => ({
        appSearch,
        appCategoryItem,
        appCarousel,
        appTimer
    })


    return {
        state,
        template,
        styles,
        children
    }
}

export default appCategory