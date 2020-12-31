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
            <a href="#/" class="btn btn--danger">
                <i class="las la-cart-arrow-down btn__icon"></i>  Adicionar ao carrinho
            </a>
        </div>
    </div>
`