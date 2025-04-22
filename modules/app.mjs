export class app {

    volante = [];

    constructor() {
        this.tela()
        this.botoes()
        this.reset()
    }

    tela() {
        const app = document.querySelector('main');

        let bloco = '';
        for (let i = 0; i < 100; i++) {
            let numero = i < 10 ? `0${i}` : i;
            bloco += `<button class="numero" value="${numero}">${numero}</button>`;
        }

        app.innerHTML = bloco;
    }

    botoes() {
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
            })
        })
    }

    reset() {
        const reset = document.querySelector('#reset');

        reset.addEventListener('click', () => {
            this.volante = [];
            const botoes = document.querySelectorAll('main button');
            botoes.forEach((e) => {
                e.classList.remove('numero');
                e.classList.remove('selecionado');
                e.classList.add('numero');
            })
        })
    }
}