export default ({ ctx, css }) => css`
    ${ctx} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;
        padding:15px;
        background:#fff;
        color:#666
    }

    ${ctx} .timer__wrapper,
    ${ctx} .timer__text {
        display: flex;
        width:100%;
        justify-content: center
    }

        ${ctx} .timer__text  {
            line-height:20px;
            font-size: .875em
        }

    ${ctx} .timer__icon {
        display:flex;
        font-size: 1.3em;
        margin-right:5px;
    }
`