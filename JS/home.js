fetch("JSON/livros.json")
  .then(resposta => resposta.json())
  .then(dados => {
    const containerProjetos = document.querySelector(".containerProjetos");
    const botoes = document.querySelectorAll(".botoes button");

    function criarCards(categoria = "todos") {
      const livrosFiltrados = categoria === "todos"
        ? dados.livros
        : dados.livros.filter(livro => livro.categoria === categoria);

      containerProjetos.innerHTML = livrosFiltrados.map(livro => `
         <div class="cardProjeto">
                    <div class="capa">
                        <img src="${livro.capa}" alt="Capa de ${livro.nome}">
                    </div>
                    <div class="informacoesGerais">
                        <div class="informacoes">
                            <h3>${livro.nome}</h3>
                            <p>${livro.descricao}</p>
                        </div>
                        <div class="categorias">
                            <span>${livro.categoria}</span>
                        </div>
                    </div>
                </div>
      `).join(''); 
    }

    criarCards();

    botoes.forEach(botao => {
      botao.addEventListener("click", () => {
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        let categoria = botao.getAttribute("data-categoria") || botao.textContent.toLowerCase();
        if (categoria === "romances") {
          categoria = "romance";
        }

        criarCards(categoria);
      });
    });
  })
  .catch(erro => console.error("Erro ao carregar os livros:", erro));