class URLSelect{
    constructor(principal, sequencia, classeAtiva){
        this._principal = document.querySelector(principal);
        this._sequencia = Array.from(document.querySelectorAll(sequencia));
        this.elementoAtivo = document.getElementsByClassName(classeAtiva);
        this.classe = classeAtiva;

        this._indiceAtual = 0;

        //Botões
        this.botoesImagem = Array.from(document.querySelectorAll('[data-control-i]'));
        this.botoesSequencia = Array.from(document.querySelectorAll('[data-control-s]'));

        this.botoesImagem[0].addEventListener('click', this.antImg.bind(this));
        this.botoesImagem[1].addEventListener('click', this.proxImg.bind(this));

        //Carrega primeira imagem
        this.preLoad();

        //Evento de clicar na imagem e trocar URL
        this._sequencia.forEach(img => img.addEventListener('click', this.selectURL.bind(this)));

    }

    preLoad(){
       return this._principal.src = this._sequencia[0].getAttribute('src');
    }

    selectURL(elemento){
        this._principal.src = elemento.target.getAttribute('src');

        this._indiceAtual = elemento.target.getAttribute('data-img');
        
        this.elementoAtivo[0].classList.remove(this.classe);

        return {
            class: elemento.target.parentElement.classList.add(this.classe),
            // index: this._indiceAtual
        }
    }

    slideAtual(){
        return [parseInt(this._sequencia[this._indiceAtual].getAttribute('data-img')), this._sequencia[this._indiceAtual]];
    }

    classeAtiva(imagens, elementoAtivo){
        elementoAtivo[0].classList.remove(this.classe);
        imagens[this._indiceAtual].parentElement.classList.add('img-ativo');
    }
    antImg(){
        this.slideAtual()[0] == 0 ? this._indiceAtual = 0 : this._indiceAtual = (this.slideAtual()[0] - 1);


        // if(this.slideAtual()[0] == 0){
        //     this._indiceAtual = 0;
        // }
        // else{
        //     this._indiceAtual = (this.slideAtual()[0] - 1);
        // }
        this._principal.src = this._sequencia[this._indiceAtual].getAttribute('src');
        
        this.classeAtiva(this._sequencia, this.elementoAtivo);
    }
    proxImg(){
        this.slideAtual()[0] >= (this._sequencia.length -1) ? this._indiceAtual = 0 : this._indiceAtual = (this.slideAtual()[0] + 1);


        // if(this.slideAtual()[0] >= (this._sequencia.length -1)){
        //     this._indiceAtual = 0;;
        // }
        // else{
        //     this._indiceAtual = (this.slideAtual()[0] + 1);
        // }
        this._principal.src = this._sequencia[this._indiceAtual].getAttribute('src');
        
        this.classeAtiva(this._sequencia, this.elementoAtivo);
    }
}

new URLSelect('[data-imagem="principal"]', '[data-img]', 'img-ativo');