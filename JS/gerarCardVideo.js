for (let i = 0; i < 3; i++) {

    gerarCard("meu-video.mp4",
        'Nome',
        'Descrição',
    )
}
function gerarCard(video, nome, descricao) {
    const containerCards = document.querySelector(".containerVideos")
    containerCards.innerHTML += `
    <div class="cardVideo">
                <div class="Video">
                    <video controls>
                        <source src="${video}" type="video/mp4">
                    </video>
                </div>
                <div class="Informacoes">
                    <h3>${nome}</h3>
                    <p>${descricao}</p>
                </div>
            </div>
    
    `
}

