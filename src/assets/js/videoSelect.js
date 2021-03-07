const itens = document.querySelectorAll('.conteudo-video__lista li .conteudo-video__informacoes');
const videoPrincipal = document.querySelector('.video-principal');
const elementoAtivoInicial = document.getElementsByClassName("ativo");

itens.forEach((element)=>{
  element.addEventListener('click', SelectVideo);
});

function SelectVideo(element){
  const div = element.target.parentElement;
  const videoURL = div.getAttribute('data-src');

  //Adicionar class 'ativo' ao click
  elementoAtivoInicial[0].classList.remove('ativo');
  div.classList.add('ativo');

  return videoPrincipal.src = videoURL;
};
