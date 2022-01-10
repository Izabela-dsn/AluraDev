const template = (color, codigo, nomeProjeto, descricaoProjeto) => {
  const linhaNovoConteudo = document.createElement('li')
  const conteudo = `
  <li class="card">
          <a href="/index.html">
            <section class="codigo">
              <div class="codigo-div-colorida" style="background:${color};">
                <div class="codigo-container ">
                  <div class="circulos-pequenos"></div>
                  <div class="circulos-pequenos"></div>
                  <div class="circulos-pequenos"></div>

                  <div class="wrapper">
                    <code
                      class="codigo-editor hljs"
                      aria-label="Editor de Código"
                    >
                    ${codigo}
                    </code>
                  </div>
                </div>
            </section>
          </a>
          
            <section class="dados">
              <h2 class="nome">${nomeProjeto}</h2>
              <p class="descricao">${descricaoProjeto}</p>
            </section>
            <footer>
                <div class="interacao">
                  <p><img src="/assets/comment.svg" alt="" class="comentario" /> 9</p>
                  <p class="coracao"><img src="/assets/heart.svg" alt="" class="heart" /> 9</p>
                </div>
                <div class="avatar" >
                  <img src="assets/Photo.svg" alt />
                  <p>&#64;Harry</p>
                </div>
            </footer>
        
        </li>
  `
  linhaNovoConteudo.innerHTML = conteudo
  return linhaNovoConteudo
}

const listagem = document.querySelector('.cards-projetos')

// Pegando dados do local storage
const carregaCards = () => {
  const dados = JSON.parse(localStorage.getItem('dados')) || []
  console.log(dados)

  dados.forEach(element => {
    listagem.appendChild(
      template(element.cor, element.codigo, element.nome, element.descricao)
    )
  })
}
carregaCards()

const coracao = document.querySelector('.coracao')
const icon = document.querySelector('.heart')
coracao.addEventListener('click', () => {
  icon.setAttribute('src', '/assets/heart-active.svg')
})
