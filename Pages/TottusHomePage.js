import { Selector, t } from 'testcafe';

class TottusHomePage {

    constructor() {
        this.btnRecetas = Selector('li#new_tottus_nav_cliente_recetas');
        this.lblTitulo = Selector('head > title');
    }

    async clickBtnRecetas() {
        await t.click(await this.btnRecetas);
    }

    async getPageTitle() {
        return await this.lblTitulo.innerText;
    }

}
export default new TottusHomePage();