const header = document.querySelector('header')

function GerarMenu() {
    header.innerHTML = `
    <div class="container">
            <div class="logo">
                <img src="assets/logo.png" alt="logo">
            </div>

            <div class="links">
                <nav>
                    <ul>
                        <li><a href="">Início</a></li>
                        <li><a href="">Bíblia</a></li>
                        <li><a href="">Testemunhos</a></li>
                        <li><a href="">Planos</a></li>
                        <li><a href="">Leitura Guiada</a></li>
                    </ul>
                </nav>
            </div>

            <div class="botoes">
                <button command="show-modal" commandfor="formulario">CONTATE-NOS</button>
            </div>

            <dialog id="formulario">
                <div class="btn-close">
                        <button  command="close" commandfor="formulario">X</button>
                    </div>
                <form autocomplete="off">
                    <div class="titulo">
                        <h2>Contate-nos</h2>
                    </div>
                    <div class="inputs">
                        <input type="text" id="nome" placeholder="Coloque seu nome completo">
                        <input type="email" id="email" placeholder="Digite seu email">
                        <input type="text" id="assunto" placeholder="assunto">
                    </div>

                    <div class="textAreas">
                        <textarea name="mensagem" id="mensagem" placeholder="Mensagem"></textarea>
                    </div>
                
                    <div class="botao">
                        <button>Enviar</button>
                    </div>
                </form>
            </dialog>

        </div>
    
    `
}

GerarMenu()