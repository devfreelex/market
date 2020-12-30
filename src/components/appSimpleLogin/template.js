export default ({ props, state, html }) => {

    return html`
    <div class="simple__login__wrapper">
        <div class="form form--vertical">
            <label  class="form__label">
                <span class="form__span"> E-mail </span>
                <input 
                    type="text" 
                    class="form__input ${props.validation.email}" 
                    id="email" 
                    value="${state.email}"
                >
            </label>
            <label  class="form__label">
                <span class="form__span"> Senha </span>
                <input 
                    type="text" 
                    class="form__input ${props.validation.password}" 
                    id="password" 
                    value="${state.password}"
                >
            </label>
            <button 
                class="btn btn__login btn--hover  ${props.validation.enableButton ? '': 'disabled'}" 
                id="btnLogin" 
                ${props.validation.enableButton ? '': 'disabled'}
            > 
                <i class="las la-sign-in-alt btn__icon"></i> Entrar 
            </button>
        </div>
    </div>
`
}