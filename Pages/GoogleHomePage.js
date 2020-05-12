import { Selector, t } from 'testcafe';

class GoogleHomePage {
    constructor() {
        this.txtBusqueda = Selector('input[name="q"]');
        this.btnBusqueda = Selector('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b');
        this.lblTitulo = Selector('head > title');
        this.lnkSitioWeb = Selector('div.wLAgVc');
    }

    async setTextTxtBusqueda(searchText) {
        await t.typeText(this.txtBusqueda, searchText);
    }

    async clickBtnBusqueda() {
        await t.click(this.btnBusqueda);
    }

    async getPageTitle() {
        return this.lblTitulo.innerText;
    }

    async clickLinkSitioWeb() {
        await t.click(this.lnkSitioWeb);
    }
    
    async pressKey(key) {
        await t.pressKey(key);
    }
}
export default new GoogleHomePage();