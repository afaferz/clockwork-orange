const itens = document.querySelectorAll('.conteudo-video__lista li .conteudo-video__informacoes');
const videoPrincipal = document.querySelector('.video-principal');

itens.forEach((element)=>{
    element.addEventListener('click', SelectURL);
});

function SelectURL(element){
    const div = element.target;
    const videoURL = div.getAttribute('data-src');

    return videoPrincipal.src = videoURL;
};
