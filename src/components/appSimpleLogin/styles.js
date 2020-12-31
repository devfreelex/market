export default ({ ctx, css }) => css`
    ${ctx} {
        display:flex;
        width:100%;
        margin-bottom:15px;
        flex-direction: column;
    }

    ${ctx} .simple__login__wrapper {
        display:flex;
        width:100%;
        border-radius:20px;
        border:1px #ccc solid;
        padding:30px 15px;
        background:#ebebeb
    }

`