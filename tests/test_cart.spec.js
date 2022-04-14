module.exports = {
    'clear cart': function(browser) {
        const homePage = browser.page.home();
        homePage.navigate();
        homePage.click('@mainPopBannercloseButton');

        homePage.setValue('@mainHeaderSearchBarInputField', 'komputer');
        homePage
            .click('@mainHeaderSearchBarBtn')
            .assert.title('Komputer – Daftar Harga Komputer Terbaru | srp-elevenia')

        const searchPage = browser.page.search();
        searchPage
            .click('@mostSellingSort')
            .waitForElementVisible('@loadingDimmed')
            .waitForElementNotVisible('@loadingDimmed');
        searchPage.click('@productList');

        const productPage = browser.page.productDetail();
        productPage.waitForElementVisible('@buyNowButton');
        productPage.waitForElementVisible('@addToCartButton');
        productPage.click('@quantityNumField');
        productPage.clearValue('@quantityNumField');
        productPage.setValue('@quantityNumField', '3');
        productPage.click('@addToCartButton');
        productPage.waitForElementVisible('@cartConfirmationModal');
        productPage.click('@seeCartOkButton');
    }
}
