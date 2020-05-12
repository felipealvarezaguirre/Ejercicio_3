import { Selector, t } from 'testcafe';

class TottusRecetasPage {
    constructor() {
        this.btnDificultadAlta = Selector('#myDIV > button:nth-child(4)');
    }

    async clickBtnDificultadAlta() {
        await t.click(this.btnDificultadAlta);
    }

    async buscarReceta(receta) {
        this.lblRecetas = Selector('h3').withText(receta);
        await t.click(this.lblRecetas);
    }

}
export default new TottusRecetasPage();