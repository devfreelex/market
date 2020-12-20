export default ({ props, html }) => html`
    <div class="cat__item__wrapper">
        <a href="${props.link}" class="cat__item__link">${props.label}</a>
    </div>
`