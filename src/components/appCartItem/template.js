
import imgFeijao from '../../assets/images/feijao.jpeg'
export default ({ state, html }) => html`
    <div class="cart_item__wrapper">
        <div class="cart_item__image">
            <img src="${imgFeijao}">
        </div>
        <div class="cart_item__content">
            <div class="cart_item__title">Título do produto vem aqui</div>
            <div class="cart_item__amount">
                <div class="product__amount">
                    <i class="las la-minus-circle amount__btn_icon amount__btn--hover"></i>
                    <span class="amount__value">07</span>
                    <i class="las la-plus-circle amount__btn_icon amount__btn--hover"></i>
                </div>            
            </div>
        </div>
        <div class="cart_item__total">
            <span class="cart_item__label">Total parcial:</span>
            <p class="cart_item__value">R$ 199,75</p>
        </div>
    </div>
`