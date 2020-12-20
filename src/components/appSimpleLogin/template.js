export default ({ state, html }) => html`
    <div class="simple__login__wrapper">
        <div class="form form--vertical">
            <label  class="form__label">
            <span class="form__span"> E-mail </span>
            <input type="text" class="form__input">
            </label>
            <label  class="form__label">
            <span class="form__span"> Senha </span>
            <input type="text" class="form__input">
            </label>
            <button class="btn btn__login btn--hover"> 
                <i class="las la-sign-in-alt btn__icon"></i> Entrar 
            </button>
        </div>
    </div>
`