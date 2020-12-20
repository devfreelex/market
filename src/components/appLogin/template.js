export default ({ html }) => html`
    <div class="login__wrapper">
        <div class="login__header">
            <h1 class="login__title">
                <span class="title__minor">Super</span>
                <span class="title__major">Mercado</span>
            </h1>
        </div>
        <div class="login__options">
            <div class="options__wrapper">
                <div data-component="appSimpleLogin"></div>
                <button class="btn btn__facebook btn--hover"> 
                    <i class="lab la-facebook-f btn__icon"></i> Facebook
                </button>
                <button class="btn btn__google btn--hover"> 
                    <i class="lab la-google btn__icon"></i> Google
                </button>
            </div>
        </div>

    </div>
`