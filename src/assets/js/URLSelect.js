class URLSelect{
    constructor(principal, sequencia, classeAtiva){
        this._principal = document.querySelector(principal);
        this._sequencia = Array.from(document.querySelectorAll(sequencia));
        this.elementoAtivo = document.getElementsByClassName(classeAtiva);
        this.classeAtiva = classeAtiva;
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

    get URLAtual(){
        this._principal.getAttribute('src');
    }

    preLoad(){
       return this._principal.src = this._sequencia[0].getAttribute('src');
    }

    selectURL(elemento){
        this._principal.src = elemento.target.getAttribute('src');
        this.elementoAtivo[0].classList.remove(this.classeAtiva);
        return elemento.target.parentElement.classList.add(this.classeAtiva);
    }

    antImg(){
        var i;
        console.log('anterior')
        for (i = 0; i < this._sequencia.length; i++) {
            this._principal.src = this._sequencia[i].getAttribute('src');
        }
    }
    proxImg(){
        var i;
        console.log('proximo');
        for (i = 0; i < this._sequencia.length; i++) {
            this._principal.src = this._sequencia[i].getAttribute('src');
        }
    }
}

new URLSelect('[data-imagem="principal"]', '[data-img]', 'img-ativo');