import { app } from "./modules/app.mjs";

const sistema = new app();

document.querySelector('#reset').addEventListener('click', () => {
    sistema.reset();
});

document.querySelector('#palpite').addEventListener('click', () => {
    sistema.palpite();
});