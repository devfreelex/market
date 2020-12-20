export default ({ ctx, css }) => css`
    ${ctx} {
        display:flex;
        width:100%;
        background:#ccc;
    }

    ${ctx} .search__wrapper {
        display:flex;
        padding:15px;
        width:100%;
    }

    ${ctx} .search__input {
        width:calc(100% - 65px);
        height:50px;
        padding:15px;
        margin-right:15px;
        background:#fff;
        border:1px #c3c5c6 solid;
        border-radius:5px;
        outline:0;
        color:#666;
        font-size:.875em;
        font-weight: bold;
    }

    ${ctx} .search__button {
        display:flex;
        align-items:center;
        justify-content: center;
        width:50px;
        height:50px;
        text-align:center;
        text-transform: uppercase;
        font-weight:bold;
        font-size:.775em;
        border: 1px #ccc solid;
        border-radius:5px;
        background:#a8a8a8;
        filter: contrast(95%) saturate(70%); 
        transition: all .3s;
        outline:0;        
        cursor: pointer;
        color:#fff;              
    }

    ${ctx} .search__button--hover:hover {
        background:#fff;
        color:#a8a8a8;      
    }    

    ${ctx} .search__icon {
        font-size: 2em;
        margin-right:5px;
        position:relative;
        top:1px;
        left:2px;
  
    }
`