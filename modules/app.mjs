const total = document.querySelector('#total');

export class app {

    volante = [];
    total_volante = 0;

    constructor() {
        this.tela()
    }

    tela() {
        const app = document.querySelector('main');

        let bloco = '';
        for (let i = 1; i <= 100; i++) {
            let numero = i < 10 ? `0${i}` : i == 100 ? `00` : i;
            bloco += `<button class="numero" value="${numero}">${numero}</button>`;
        }

        app.innerHTML = bloco;

        this.#botoes();
        this.#total();
    }

    #botoes() {
        const botoes = document.querySelectorAll('main button');

        botoes.forEach((e) => {
            e.addEventListener('click', () => {
                if (this.volante.length < 50) {
                    if (e.className === 'numero') {
                        e.classList.toggle('numero');
                        e.classList.toggle('selecionado');
                        this.volante.push(e.value);
                    } else {
                        e.classList.toggle('numero');
                        e.classList.toggle('selecionado');
                        this.volante.pop(e.value);
                    }
                } else {
                    if (e.className === 'selecionado') {
                        e.classList.toggle('numero');
                        e.classList.toggle('selecionado');
                        this.volante.pop(e.value);
                    }
                }
                this.#total();
            })
        })
    }

    #total() {
        this.total_volante = this.volante.length;
        total.innerHTML = this.total_volante;
    }

    reset() {
        this.volante = [];
        const botoes = document.querySelectorAll('main button');
        botoes.forEach((e) => {
            e.classList.remove('numero');
            e.classList.remove('selecionado');
            e.classList.add('numero');
        })
        this.#total();
    }

    palpite() {
        this.reset();

        let palpite = [];

        while (palpite.length < 50) {
            let sorteio = Math.floor(Math.random() * (99 - 0));
            sorteio = sorteio < 10 ? `0${sorteio}` : `${sorteio}`;
            if (!palpite.includes(sorteio)) {
                palpite.push(sorteio);
            }
        }

        const botoes = document.querySelectorAll('main button');
        botoes.forEach((e) => {
            if (this.volante.length < 50) {
                if (palpite.includes(e.value)) {
                    if (e.className === 'numero') {
                        e.classList.toggle('numero');
                        e.classList.toggle('selecionado');
                        this.volante.push(e.value);
                    }
                }
            }
            this.#total()
        })
    }
}