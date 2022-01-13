/* mudando cor de fundo */
const div = document.querySelector('[data-color-place]')
let color = document.querySelector('[data-form-input-color]')

color.addEventListener('input', () => {
  div.style.backgroundColor = color.value
})

/* colocando highlight */
const linguagemCodigo = document.querySelector(
  '[data-form-input-select-linguagem]'
)
const areaDoCodigo = document.querySelector('.wrapper')
const btnHighlight = document.querySelector('[data-button-highlight]')

const aplicaHighlight = e => {
  e.preventDefault()
  const codigo = areaDoCodigo.innerText
  areaDoCodigo.innerHTML = `<code class='codigo-editor hljs ${linguagemCodigo.value}' contenteditable='true' aria-label='Editor de Código'></code>`
  areaDoCodigo.querySelector('code').textContent = codigo
  hljs.highlightElement(areaDoCodigo.querySelector('code'))
}
btnHighlight.addEventListener('click', aplicaHighlight)

/* pegando e salvando dados */
const btnSave = document.querySelector('[data-button-save]')
const nomeProjeto = document.querySelector('[data-form-input-nome-projeto]')
const descricaoProjeto = document.querySelector(
  '[data-form-input-descricao-projeto]'
)
const codigoH = document.querySelector('code')

btnSave.addEventListener('click', e => {
  e.preventDefault()

  // verifica se há algo no local storage se não há volta um array vazio
  const cardsInfo = JSON.parse(localStorage.getItem('dados')) || []

  if (nomeProjeto.value === '') {
    alert('O projeto precisa de um nome!')
  } else if (descricaoProjeto.value === '') {
    alert('O projeto precisa de uma descrição!')
  } else {
    // puxa as informações no array
    cardsInfo.push({
      nome: nomeProjeto.value,
      descricao: descricaoProjeto.value,
      cor: color.value,
      codigo: codigoH.innerHTML
    })

    // manda o array pro local storage
    localStorage.setItem('dados', JSON.stringify(cardsInfo))
    alert('Sucesso!')

    nomeProjeto.value = ''
    descricaoProjeto.value = ''
    codigoH.innerHTML = ''
  }
})

/* Salvando código em PNG */
const btnSalvarComoImagem = document.querySelector('.btn-salvar-como-imagem')

btnSalvarComoImagem.addEventListener('click', () => {
  domtoimage.toBlob(document.getElementById('edicao')).then(function (blob) {
    window.saveAs(blob, 'my-image.png')
  })
})
