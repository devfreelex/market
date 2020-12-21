export default ({ ctx, css }) => css`
    ${ctx},
    ${ctx} .carousel__wrapper,
    ${ctx} .carousel__area, 
    ${ctx} .carousel__nav {
        display:block;
        float:left;
        width:100%;
    }

    ${ctx} .carousel__wrapper {
        flex-direction: column;
    }

    ${ctx} .carousel__area {
        background:#3a2eca;
    }  
    
    ${ctx} .carousel__item {
        display:flex; 
        flex-direction:column;
        align-items: center;
        justify-content:center;
        padding:45px 0 15px 0
    }

    ${ctx} .carousel__img {
        display:flex; 
        width:250px;
        height:250px;
        border-radius:50%
    }

    ${ctx} .carousel__title {
        display:flex;
        justify-content: center;
        align-items: center;
        width:100%;
        padding:30px 15px 15px 15px;
        font-size:2em;
        font-weight:lighter;
        text-transform:uppercase;
        color:#fff;
        text-align:center;
    }

    ${ctx} .carousel__price {
        display:flex;
        flex-direction: column;
        align-items: center;
        padding:15px;
        width:100%;
    }

    ${ctx} .price__wrapper {
        display:flex;
        flex-direction: column;
        align-items: flex-end;
    }

    ${ctx} .default__price {
        font-size:1.2em;
        font-weight:300;
        text-decoration: line-through;
        color:#fff;
    }

    ${ctx} .offer__price {
        font-size:2.5em;
        font-weight:500;
        color:#fff    
    }

    ${ctx} .price__minor {
        font-size:.5em   
    }

    ${ctx} .carousel__nav {
        display:flex;
        justify-content:center;
        width:100%;
        padding:15px 15px 30px 15px;
        background:#3a2eca;
        color:#fff;
    }    

    ${ctx} .nav {
        display:flex;
        align-items:center;
        justify-content:center;
        width:45px;
        height:45px;
        background:#271f8c;
        color:#ebebeb;
        border-radius:50%;
        cursor:pointer;
        transition: all .5s ease-in;
    }

    ${ctx} .nav + .nav {
        margin-left:15px;
    }

    ${ctx} .nav:hover {
        background:#fff;
        color:#271f8c
    }


    @media all and (max-width:580px ) {
        ${ctx} .carousel__img {
            width:120px;
            height:120px;
        }   
        
        ${ctx} .carousel__title {
            font-size: 1.5em
        }

        ${ctx} .offer__price {
            font-size: 2em
        }
    }
`