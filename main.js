import { app } from "./modules/app.mjs";

const sistema = new app();

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    sistema.reset();
});