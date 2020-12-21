const carouselItem = ({ item, html }) =>  html`
    <div class="carousel__item">
        <img src="${item.imgSrc}" class="carousel__img">
        <div class="carousel__title">${item.title}</div>
        <div class="carousel__price">
            <div class="price__wrapper">
                <div class="default__price">de: R$ 28,90</div>
                <div class="offer__price"> 
                    <span class="price__minor"> por: </span>
                    R$ 22,90
                </div>            
            </div>
        </div>
    </div>    
`

export default ({ state, html }) => html`
    <div class="carousel__wrapper">
        <div class="carousel__area">
            ${
                state.items.map( item => carouselItem({ item, html}))
            }
        </div>
        <div class="carousel__nav">
            <div class="nav nav__prev"><</div>
            <div class="nav nav__next">></div>
        </div>
    </div>
`