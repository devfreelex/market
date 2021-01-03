export default ({ ctx, css }) => css`
    ${ctx} {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    ${ctx} .cart__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background: #e8e8e8;
    }

    ${ctx} .content {
        display: flex;
        width: 100%;
        max-width: 1180px;
    }

    ${ctx} .gutter {
        padding:15px;
    }   
    
    ${ctx} .item__wrapper {
        display:flex;
        width:100%;
        padding:15px 0;
    }
`