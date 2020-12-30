import '../../assets/styles/reset.css'
import '../../assets/styles/global.css'

export default ({ ctx, css }) => css`
    ${ctx} {
        width: 100%;          
        height:100%;
        background:#f1f1f1     
    }

    ${ctx} .main-wrapper {
        display:flex;
        height:100%;
    }
    `