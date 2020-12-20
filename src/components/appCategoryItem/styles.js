export default ({ ctx, css }) => css`
    ${ctx},
    ${ctx} .cat__item__wrapper {
        display:block;
        float:left;
        width:100%
    }

    ${ctx} {
        padding:15px;
        width:25%
    }
  

    ${ctx} .cat__item__link {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:120px;
        padding:15px;
        text-decoration:none;
        font-size: .875em;
        color:#666;
        background:#f1f1f1;
        border-radius:3px;
    }

    @media all and (max-width: 780px) {
        ${ctx} {
            width:33.333%
        }
    }

    @media all and (max-width: 580px) {
        ${ctx} {
            width:50%
        }
    }

    @media all and (max-width: 480px) {
        ${ctx} {
            width:100%
        }
    }


`