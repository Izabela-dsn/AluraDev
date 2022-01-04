/* Menu */
const closeMenu = document.querySelector('.icon-close')
const menu = document.querySelector('.icon-menu')
const avatar = document.querySelector('.avatar')
const linha = document.querySelector('.linha')
const nav = document.querySelector('.menu-lateral')
const toggle = document.querySelectorAll('.toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
    avatar.classList.toggle('show')
    linha.classList.toggle('show')
    closeMenu.classList.toggle('show')
    menu.classList.toggle('show')
  })
}

/* Barra de Pesquisa */
const abrirBusca = document.querySelector('.icon-busca')
const barraBusca = document.querySelector('[data-input-busca]')
const fecharBusca = document.querySelector('.icon-fechar-busca')
const toggleBusca = document.querySelectorAll('.toggle-busca')
const logo = document.querySelector('.logo')

for (const elemento of toggleBusca) {
  elemento.addEventListener('click', () => {
    barraBusca.classList.toggle('show')
    abrirBusca.classList.toggle('show')
    fecharBusca.classList.toggle('show')
    menu.classList.toggle('show')
    logo.classList.toggle('show')
  })
}
