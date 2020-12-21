import Siema from 'siema'

const carouselFactory = ({ selector, duration, effect }) => {

    return new Siema({
        selector: selector || '.siema',
        duration: duration || 200,
        easing: effect || 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: false,
        threshold: 20,
        loop: true,
        rtl: false,
    });

}

export default carouselFactory