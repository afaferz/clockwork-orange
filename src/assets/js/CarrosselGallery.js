class CarrosselGallery{
  constructor(principal, sequencia, classeAtiva){
    this._principal = document.querySelector(principal);
    this._sequencia = Array.from(document.querySelectorAll(sequencia));
    this.elementoAtivo = document.getElementsByClassName(classeAtiva);
    this.classe = classeAtiva;

    this._indiceAtual = 0;

    //Botões
    this.botoesImagem = Array.from(document.querySelectorAll('[data-control-i]'));
    this.botoesSequencia = Array.from(document.querySelectorAll('[data-control-s]'));

    //Carrega primeira imagem
    this.preLoad;

    //Evento de clicar na imagem e trocar URL
    this._sequencia.forEach(img => img.addEventListener('click', this.selectURL.bind(this)));

    //Evento de clicar nos botões da imagem
    this.botoesImagemController(this.botoesImagem);

    //Evento de clicar e mover a barra de sequência
    this.sequenciaController(this.botoesSequencia);
  };

  get preLoad(){
    return this._principal.src = this._sequencia[0].getAttribute('src');
  };

  selectURL(elemento){
    this._principal.src = elemento.target.getAttribute('src');

    this._indiceAtual = elemento.target.getAttribute('data-img');
    
    this.elementoAtivo[0].classList.remove(this.classe);

    return {
      class: elemento.target.parentElement.classList.add(this.classe),
    };
  };

  get slideAtual(){
    return {
      atributo: parseInt(this._sequencia[this._indiceAtual].getAttribute('data-img')), 
      indice: this._sequencia[this._indiceAtual]
    };
  }

  classeAtiva(imagens, elementoAtivo){
    elementoAtivo[0].classList.remove(this.classe);
    imagens[this._indiceAtual].parentElement.classList.add('img-ativo');
  }

  get mostraImagem(){
    return this._principal.src = this._sequencia[this._indiceAtual].getAttribute('src');
  }
  
  antImg(){
    this.slideAtual.atributo == 0 ? this._indiceAtual = 0 : this._indiceAtual = (this.slideAtual.atributo - 1);

    this.mostraImagem;
    
    this.classeAtiva(this._sequencia, this.elementoAtivo);
  }
  proxImg(){
    this.slideAtual.atributo >= (this._sequencia.length - 1) ? this._indiceAtual = 0 : this._indiceAtual = (this.slideAtual.atributo + 1);

    this.mostraImagem;
    
    this.classeAtiva(this._sequencia, this.elementoAtivo);
  }

  botoesImagemController(botoes){
    botoes.forEach(botao=>{
      botao.addEventListener('click', event =>{
        if(event.currentTarget == botoes[0]){
          this.antImg();
        };
        if(event.currentTarget == botoes[1]){
          this.proxImg();
        };
      });
    });
  };

  scrollCarrossellLeft(carrossel){
    return carrossel.scrollLeft -= carrossel.offsetWidth;
  }
  scrollCarrosselRight(carrossel){
    return carrossel.scrollLeft += carrossel.offsetWidth;
  }

  sequenciaController(botoes){
    const carrossel = document.querySelector('.container-carrossel');

    botoes.forEach(botao=>{
      botao.addEventListener('click', event=>{
        if(event.target == botoes[0]){
          this.scrollCarrossellLeft(carrossel);
        };
        if(event.target == botoes[1]){
          this.scrollCarrosselRight(carrossel);
        };
      });
    });
  };
};

new CarrosselGallery('[data-imagem="principal"]', '[data-img]', 'img-ativo');