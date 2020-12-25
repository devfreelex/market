export default ({ state, html }) => html`
    <div class="simple__login__wrapper">
        <div class="form form--vertical">
            <label  class="form__label">
                <span class="form__span"> E-mail </span>
                <input type="text" class="form__input" id="email" value="${state.email}">
            </label>
            <label  class="form__label">
                <span class="form__span"> Senha </span>
                <input type="text" class="form__input" id="password" value="${state.password}">
            </label>
            <button class="btn btn__login btn--hover" id="btnLogin"> 
                <i class="las la-sign-in-alt btn__icon"></i> Entrar 
            </button>
        </div>
    </div>
`