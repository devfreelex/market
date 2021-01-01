import arrozImg from '../../assets/images/arroz.jpeg'

export default ({ state, html }) => html`
    <div class="product__wrapper">
        <div class="image__wrapper">
            <img src="${arrozImg}" class="product__image">
        </div>
        <div class="product__title">Título do produto bem aqui....</div>
        <div class="product__description">Descrição básica do produto bem aqui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam.</div>
        <div class="product__price">
            <span class="price__label">Preço unitário:</span>
            <span class="price__label">R$ 27,90</span>
        </div>
        <div class="product__amount">
            <i class="las la-minus-circle amount__btn_icon amount__btn--hover"></i>
            <span class="amount__value">07</span>
            <i class="las la-plus-circle amount__btn_icon amount__btn--hover"></i>
        </div>
        <div class="product__call_action">
            <a href="#/" class="btn btn--danger">
                <i class="las la-cart-arrow-down btn__icon"></i>  Adicionar ao carrinho
            </a>
        </div>
    </div>
`