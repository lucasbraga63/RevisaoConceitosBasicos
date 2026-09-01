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
                <button>CONTATE-NOS</button>
            </div>
        </div>
    
    `
}

GerarMenu()