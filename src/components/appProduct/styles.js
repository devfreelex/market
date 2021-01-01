export default ({ ctx, css }) => css`
    ${ctx} {
        background:#fff;
        padding:15px;
        overflow:hidden;
        border-radius:6px;
        transition: .5s ease-in-out
    }

    ${ctx}:hover{
        box-shadow: 3px 3px 30px rgb(0, 0, 0, .3)
    }

    ${ctx},
    ${ctx} .product__wrapper {
        display:flex;
        width:100%;        
    }

    ${ctx} .product__wrapper {
        flex-direction:column;
        align-items: center;
        background:#fff;
    }

    ${ctx} .image__wrapper {
        display:block;
        margin:0 auto;
        width:220px;
    }    

    ${ctx} .product__image {
        width:100%;
    }

    ${ctx} .product__title,
    ${ctx} .product__description,
    ${ctx} .product__price,
    ${ctx} .product__call_action,
    ${ctx} .product__amount {
        display:flex;
        width:100%;
        padding-top:15px;
        font-size: .875em;
        color:#98959c;
        line-height:1.2em
    }

    ${ctx} .product__title {
        font-size: 1.2em;
        font-weight: 500;
        color:#666
    }

    ${ctx} .price__label {
        padding:15px;
        border:1px #ebebeb solid;
        width:100%;
        font-weight: bold 
    }
    ${ctx} .price__label:first-of-type {
        border-top-left-radius:3px;
        border-bottom-left-radius:3px;
    }
    ${ctx} .price__label + .price__label {
        border-left:0;
        text-align:right;
        border-top-right-radius:3px;
        border-bottom-right-radius:3px;       
        color:#999;
    }

    ${ctx} .product__description {
        line-height: 1.5em
    }   
    
    ${ctx} .product__amount {
        align-items:center;
        justify-content: space-between;
        border:1px #ebebeb solid;
        border-radius:3px;
        margin-top:15px;
        padding:0
    }
    
    ${ctx} .amount__value {
        padding:5px;
        font-weight:500;
        width:45px;
        text-align:center;
    }

    ${ctx} .btn {
        font-size: 1em;
        padding:10px 15px;
        margin-top:0;
        border-radius:3px;
    }

    ${ctx} .amount__btn_icon {
        display:flex;
        align-items:center;
        justify-content:center;
        width:45px;
        height:45px;
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

`