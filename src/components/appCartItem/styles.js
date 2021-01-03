export default ({ ctx, css }) => css`
    ${ctx} {
        display:flex;
        flex-direction: row;
        width:100%;
        background:#fff
    }

    ${ctx} .cart_item__wrapper {
        display:flex;
        width:100%;   
        padding:15px;
    }

    ${ctx} .cart_item__image {
        display:flex;
        width:100px;
        height:100px;
        padding:15px;
        border:1px #ebebeb solid;
    }

    ${ctx} .cart_item__image > img {
        width:100%;
    }
    ${ctx} .cart_item__content {
        display:flex;
        flex-direction:column;
        width:calc(100% - 211px);
        padding:15px 0 15px 15px;
        border:1px #ebebeb solid;
        border-left:0;
    }
    ${ctx} .cart_item__title {
        display:flex;
        width:100%;
        padding:0 0 15px 0;
        font-size: .875em;
        font-weight:500;
        color:#666;
    }

    ${ctx} .cart_item__amount {
        display:flex;
        width:100%;
    }

    ${ctx} .product__amount {
        display:flex;
        align-items:center;
        justify-content: space-between;
        border:1px #ebebeb solid;
        border-radius:3px;
        padding:0
    }
    
    ${ctx} .amount__value {
        padding:5px;
        font-weight:500;
        width:45px;
        text-align:center;
        font-size: .875em
    }    

    ${ctx} .btn {
        font-size: 1em;
        padding:5px;
        margin-top:0;
        border-radius:3px;
    }

    ${ctx} .amount__btn_icon {
        display:flex;
        align-items:center;
        justify-content:center;
        width:30px;
        height:30px;
        padding:5px;
        margin:2px;
        color:#999;
        background:#f1f1f1;
        border-radius:3px;
        transition: .3s ease-in-out;
        cursor: pointer;
        font-size: 1.5em
    }

    ${ctx} .amount__btn--hover:hover {
        color:#fff;
        background:#ef4859
    }    

    ${ctx} .cart_item__total {
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        border:1px #ebebeb solid;
        border-left:0
    }

    ${ctx} .cart_item__label {
        display:flex;
        width:100%;
        padding:15px;
        border-bottom:1px #ebebeb solid;
        font-weight:normal;
        font-size:.875em;
        color:#666
    }
    ${ctx} .cart_item__value {
        display:flex;
        justify-content: flex-start;
        align-items:center;
        padding:15px;
        height:100%;
        font-size:.875em;
        color:#666;
    }


@media all and (max-width: 520px) {
    ${ctx} .cart_item__wrapper {
        display:flex;
        flex-direction:column;
        width:100%;   
        padding:15px;
    }   
    
    ${ctx} .cart_item__image {
        width:100%;
        height:auto;
        justify-content:center
    }

    ${ctx} .cart_item__image > img {
        width:100px;
        height:100px;
    }

    ${ctx} .cart_item__content {
        width: 100%;
        border: 1px #ebebeb solid;
        border-top:0;
        justify-content: center;
        align-items: center;
    }

    ${ctx} .cart_item__title,
    ${ctx} .cart_item__amount {
        width:auto
    }

    ${ctx} .cart_item__total {
        flex-direction:row;
        border:1px #ebebeb solid;
        border-top:0
    }

    ${ctx} .cart_item__label {
        border:0
    }

    ${ctx} .cart_item__value {
        width:170px;
    }

}    
`