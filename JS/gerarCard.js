for (let i = 0; i < 3; i++) {

    gerarCard('assets/choosen.jpg',
        'Bota o mouse',
        'João 3:16(NAA)',
        '"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."'
    )
}
function gerarCard(imagem, titulo, nomeVersicle, versicle) {
    const containerCards = document.querySelector(".containerCards")
    containerCards.innerHTML += `
    <div class="card">
                    <div class="imagem">
                     <img src="${imagem}" alt="imagem">
                    </div>
                    <div class="titulo">
                        <h2>${titulo}</h2>
                    </div>
                    <div class="divInformacao" style="display: none;">
                        <h3>${nomeVersicle}</h3>
                        <p>${versicle}</p>
                    </div>
                </div>
    
    `
}

function ExibirInformacoes() {
    const cards = document.querySelectorAll('.card')

    cards.forEach(card => {

        const divImagem = card.querySelector('.imagem')
        const divTitulo = card.querySelector('.titulo')
        const divInformacao = card.querySelector('.divInformacao')

        card.addEventListener('mouseenter', () => {
            divImagem.style.display = 'none'
            divTitulo.style.display = 'none'
            divInformacao.style.display = 'block'
        })

        card.addEventListener('mouseleave', () => {
            divImagem.style.display = 'flex'
            divTitulo.style.display = 'flex'
            divInformacao.style.display = 'none'
        })

    })
}

ExibirInformacoes()

