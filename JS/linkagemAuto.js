const head = document.querySelector('head')

function linkarGeral() {
    head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="CSS/menu.css">`);

    const script = document.createElement('script');
    script.src = "JS/gerarMenuGeral.js";
    script.defer = true;
    head.appendChild(script);
};

function linkarHome(){
    head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="CSS/home.css">')
    head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="CSS/card.css">')

    const script = document.createElement('script');
    script.src = "JS/gerarCard.js";
    script.defer = true;
    head.appendChild(script); 
}

linkarHome();
linkarGeral();