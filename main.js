import { app } from "./modules/app.mjs";

try {
    const sistema = new app();
} catch (error) {
    console.log(error);
}


