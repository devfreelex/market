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
        color:#487def
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
        color:#487def;
    }

    ${ctx} .product__description {
        line-height: 1.5em
    }    

    ${ctx} .btn {
        font-size: 1em;
        padding:10px 15px;
        margin-top:0;
        border-radius:3px;
    }

`