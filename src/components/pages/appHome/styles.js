export default ({ ctx, css }) => css`
    ${ctx} {
        display:flex;
        flex-direction: column;
        width:100%;
        height:100%;
    }

    ${ctx} .home__wrapper {
        display:flex;
        flex-direction: column;
        align-items:center;
        width:100%;
        background:#e8e8e8
    }

    ${ctx} .content {
        display:flex;
        width:100%;
        max-width:1180px;
    }

    ${ctx} .page__header {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        padding:15px;
        font-size:1.2em;
        text-transform:uppercase;
        font-weight:bold
    }

    ${ctx} .category__items {
        display:flex;
        flex-wrap: wrap;
        width:100%;
        padding:30px 15px 15px 15px;
    }
`