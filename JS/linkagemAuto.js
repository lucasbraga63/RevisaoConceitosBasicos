const head = document.querySelector('head')

function linkarGeral() {
    head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="CSS/menu.css">`);
     head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="CSS/footer.css">`);

    const script = document.createElement('script');
    script.src = "JS/gerarMenuGeral.js";
    script.defer = true;
    head.appendChild(script);

    const scriptFooter = document.createElement('script');
    scriptFooter.src = "JS/gerarfooterGeral.js";
    scriptFooter.defer = true;
    head.appendChild(scriptFooter);
};

function linkarHome() {
    head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="CSS/home.css">')
    head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="CSS/card.css">')
    

    const script = document.createElement('script');
    script.src = "JS/gerarCard.js";
    script.defer = true;
    head.appendChild(script);

    const scriptVideo = document.createElement('script');
    scriptVideo.src = "JS/gerarCardVideo.js";
    scriptVideo.defer = true;
    head.appendChild(scriptVideo);

     const scriptHome = document.createElement('script');
    scriptHome.src = "JS/home.js";
    scriptHome.defer = true;
    head.appendChild(scriptHome);
}

linkarHome();
linkarGeral();