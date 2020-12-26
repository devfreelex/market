export default ({ state, html }) => html`
    <div class="timer__wrapper">
        <p class="timer__text">
            <i class="las la-stopwatch timer__icon"></i> Sua sessão expira em: ${state.expirationTime} minutos
        </p>
    </div>
`