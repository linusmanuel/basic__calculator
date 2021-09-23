// Change theme
const button = $('.js-theme')
const themes = {
  't-dark': 't-light',
  't-light': 't-dark',
}

const setDefaultTheme = (theme = 't-dark') =>
  document.body.setAttribute('data-theme', themes[theme])

setDefaultTheme()

button.onclick = () => {
  const currentTheme = document.body.dataset.theme
  document.body.setAttribute('data-theme', themes[currentTheme] || 't-dark')
}

// Change the icon of theme (Sun to moon)
const light = $('#theme-icon')

light.addEventListener('click', function (light) {
  light.target.classList.toggle('dark-mode')
})
