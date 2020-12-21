import template from './template'
import styles from './styles'

import carouselFactory from '../../services/carousel.provider.js'

import img1 from '../../assets/images/arroz.jpeg'
import img2 from '../../assets/images/feijao.jpeg'
import img3 from '../../assets/images/carne.jpeg'

const appCarousel = () => {

    let carousel = {}

    const state = {
        items: [
            {imgSrc: img1, title: 'Título do primeiro produto'},
            {imgSrc: img2, title: 'Título do segundo produto maior'},
            {imgSrc: img3, title: 'Título do terceiro produto bem maior ainda'},
        ]
    }

    const hooks = ({ methods }) => ({
        afterOnInit () {
            carousel = carouselFactory({
                selector: '.carousel__area'
            })
            console.log(carousel)
        }
    })

    const events = ({ on, queryOnce, methods }) => ({
        onPrev () {
            const navElement = queryOnce('.nav__prev')
            on('click', navElement, () => methods.navTo('prev'))
        },
        onNext () {
            const navElement = queryOnce('.nav__next')
            on('click', navElement, () => methods.navTo('next'))
        },
    })

    const methods = () => ({
        navTo (direction) {
            carousel[direction]()
        }
    })

    return {
        state,
        template,
        styles,
        hooks,
        events,
        methods
    }

}

export default appCarousel