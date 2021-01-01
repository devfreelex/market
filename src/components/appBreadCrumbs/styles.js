export default ({ ctx, css }) => css`

    ${ctx},
    ${ctx} .bread_crumbs__wrapper,
    ${ctx} .bread_crumbs__list {
        display:flex;
        width:100%;
    }

    ${ctx} {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        overflow: hidden
    }

    ${ctx} .bread_crumbs__wrapper {
        padding:15px;
        background:#fff;
    }

    ${ctx} .bread_crumbs__list {
        align-items: center;
        padding:2px;
        font-weight:500;
        color:#666;
        font-size: .875em
    }

    ${ctx} .bread_crumbs__item:last-of-type {
        font-weight:normal
    }

    ${ctx} .bread_crumbs__item i {
        margin:0 5px
    }

    ${ctx} .bread_crumbs__link {
        text-decoration: none;
        cursor: pointer;
        color:#666
    }


`