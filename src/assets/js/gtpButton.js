const botao = document.querySelector('.gtp');

botao.addEventListener('click', function(){
    window.scrollTo(0,0);
});

window.addEventListener('scroll', function(){
    const topo = window.pageYOffset || document.documentElement.scrollTop;
    if(topo >= 100){
        botao.classList.add('on');
    }
    else{
        botao.classList.remove('on');
    };
});