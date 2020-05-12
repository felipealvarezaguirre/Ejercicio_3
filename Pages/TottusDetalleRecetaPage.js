import { Selector, t } from 'testcafe';

class TottusDetalleRecetaPage {

    constructor() {
    }

    async validaContieneIngrediente(ingrediente) {
        this.lblIngredientes = Selector('p').withText(ingrediente).exists;
        return this.lblIngredientes;
    }

}
export default new TottusDetalleRecetaPage();