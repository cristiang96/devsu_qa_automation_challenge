/**
 * POM class for Product page
 */
export class ProductPage {
	// Locators
	static productLabel = () => cy.get('h2.name');
	static priceTxt = () => cy.get('h3.price-container');
	static addToCartBtn = () => cy.get('a[onclick^="addToCart"]');

	// Actions
	static getPrice() {
		return this.priceTxt()
			.invoke('text')
			.then((price) => {
				return Number(price.split(' ')[0].slice(1,));
			});
	}

	static clickOnAddToCart() {
		this.addToCartBtn().click();
	}
}
