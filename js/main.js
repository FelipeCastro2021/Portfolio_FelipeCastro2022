const menu = document.querySelector('.header__menu')
const itensMenu = document.querySelectorAll('.header__items li')
const toggleButton = document.querySelectorAll('.toggle')

for (const button of toggleButton) {
  button.addEventListener('click', () => {
    menu.classList.toggle('show')
  })
}

for (const item of itensMenu) {
  item.addEventListener('click', () => {
    menu.classList.remove('show')
  })
}
