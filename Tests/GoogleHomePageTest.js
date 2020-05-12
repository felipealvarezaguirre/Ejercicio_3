import GoogleHomePage from '../Pages/GoogleHomePage';
import TottusHomePage from '../Pages/TottusHomePage';
import TottusRecetasPage from '../Pages/TottusRecetasPage';
import TottusDetalleRecetaPage from '../Pages/TottusDetalleRecetaPage';

fixture('Página de Google').page('http://www.google.com').beforeEach(async t => {
    await t.maximizeWindow();
});

test('Busqueda de sucursales Tottus en la página de Google: ', async t => {
    await GoogleHomePage.setTextTxtBusqueda('tottus sucursales');
    await GoogleHomePage.pressKey('enter');
    await GoogleHomePage.clickLinkSitioWeb();
    await TottusHomePage.clickBtnRecetas();
    await TottusRecetasPage.clickBtnDificultadAlta();
    await TottusRecetasPage.buscarReceta('CORONA'); // Receta debe ir con mayúscula
    await t.expect(await TottusDetalleRecetaPage.validaContieneIngrediente('canela')).eql(true);
    await t.expect(await TottusDetalleRecetaPage.validaContieneIngrediente('azúcar rubia')).eql(true);
    //await t.expect(await TottusDetalleRecetaPage.validaContieneIngrediente('ajo')).eql(true);
});