export default ({ ctx, css }) => css`
    ${ctx} {
        height:100%;
        width:100%;
    }
    ${ctx} .login__wrapper {
        display:flex;
        flex-direction: column;
        height:100%;
        width:100%;
    }
    ${ctx} .login__header {
        display:flex;
        width:100%;
        height:250px;
        background:#ccc;
        color:#666;
        align-items:center;
        justify-content: center;
    }

    ${ctx} .login__title {
        display:flex;
        flex-direction:column;
        max-width:250px;
        padding:15px;
        font-size:4em;
        font-weight:bold
    }

    ${ctx} .title__minor {
        font-weight:lighter;
        font-size: .75em
    }

    ${ctx} .login__options {
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        height:calc(100% - 250px);
    }
    
    ${ctx} .options__wrapper {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:calc(100% - 30px);
        max-width:450px;
        min-width:350px;
        margin:0 15px;
    }

    ${ctx} .btn__facebook:hover {
        background:#209df9;
        border: 1px #0c7ecf solid;
        color:#fff;
    }

    ${ctx} .btn__google:hover {
        background:#d93025;
        border: 1px #be3127 solid;
        color:#fff;
    }

    


`