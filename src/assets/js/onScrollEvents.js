const botao = document.querySelector('.gtp');
const header = document.querySelector('.header');

botao.addEventListener('click', function(){
    window.scrollTo(0,0);
});

window.addEventListener('scroll', function(){
    const topo = window.pageYOffset || document.documentElement.scrollTop;
    if(topo >= 50){
        botao.classList.add('on');
        header.classList.add('information');
    }
    else{
        botao.classList.remove('on');
        header.classList.remove('information');
    };
});