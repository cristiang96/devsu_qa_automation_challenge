const { ProductsSection } = require('../pages/homePage/productsSection');
const { ProductPage } = require('../pages/productPage/productPage');
const { HomePage } = require('../pages/homePage/homePage');
const { CartPage } = require('../pages/cartPage/cartPage');
const { PlaceOrderModal } = require('../pages/cartPage/placeOrderModal');
const { PurchaseInformationModal } = require('../pages/cartPage/purchaseInformationModal');
const { getTodayDate } = require('../../utils/date');

describe('Shooping cart', () => {
	it('Should add products to the cart and complete the purchase process', () => {
		const products = [
			{ category: 'Laptops', name: 'MacBook Pro', price: 0 },
			{ category: 'Monitors', name: 'Apple monitor 24', price: 0 },
		];
		const orderInformation = { name: 'AT-Jhon', country: 'Brazil', city: 'Brasilia', card: '1234987656783456', month: '11', year: '29' };
		cy.visit('');
		products.forEach((product) => {
			ProductsSection.selectCategory(product.category);
			ProductsSection.selectProduct(product.name);
			ProductPage.getPrice().then((priceTxt) => (product.price = priceTxt));
			ProductPage.clickOnAddToCart();
			HomePage.navigateTo('Home');
		});
		HomePage.navigateTo('Cart');
		CartPage.rowRecords().should('have.length', products.length);
		CartPage.getProductsListInCart().then((cartProducts) => {
			const expectedProducts = products.map(({ name, price }) => ({ name, price }));
			expect(cartProducts).to.have.all.deep.members(expectedProducts);
			CartPage.getTotalPrice().then((totalPrice) => {
				const expectedTotal = expectedProducts.reduce((total, product) => total + product.price, 0);
				expect(totalPrice).to.equal(expectedTotal);
			});
		});
		CartPage.placeOrder();
		PlaceOrderModal.fillInOrder(orderInformation);
		PurchaseInformationModal.getPurchaseInformation().then((purchaseInformation) => {
			const expectedTotal = products.reduce((total, product) => total + product.price, 0);
			expect(purchaseInformation.message).to.equal('Thank you for your purchase!');
			expect(purchaseInformation.information).to.deep.include({
				Amount: `${expectedTotal} USD`,
				'Card Number': orderInformation.card,
				Date: getTodayDate(),
				Name: orderInformation.name,
			});
		});
		PurchaseInformationModal.clickOnOk();
	});
});
