export default ({ ctx, css }) => css`

    ${ctx} {
        display:flex;
        width:25%
    }

    ${ctx} + ${ctx} {
        padding: 0 0 15px 15px;;
    }
  
    ${ctx}:nth-of-type(4n + 1) {
        padding-left:0
    }
  
    ${ctx} .cat__item__wrapper {
        display:flex;
        width:100%;
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

        ${ctx} + ${ctx} {
            padding: 0 0 15px 15px;;
        }        

        ${ctx}:nth-of-type(3n + 1) {
            padding-left:0
        }
          
    }

    @media all and (max-width: 580px) {
        ${ctx} {
            width:50%
        }

        ${ctx} + ${ctx} {
            padding: 0 0 15px 15px;;
        }        

        ${ctx}:nth-of-type(2n + 1) {
            padding-left:0
        }
                  
    }

    @media all and (max-width: 480px) {
        ${ctx} {
            width:100%;
            padding: 0 0 15px 0;
        }

        ${ctx} + ${ctx} {
            padding: 0 0 15px 0;
        }         
    }


`