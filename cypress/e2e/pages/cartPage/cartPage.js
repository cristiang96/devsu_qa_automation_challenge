/**
 * POM class for Cart page
 */
export class CartPage {
	// Locators
	static rowRecords = () => cy.get('#tbodyid > tr');
	static totalPriceTxt = () => cy.get('#totalp');
	static placeOrderBtn = () => cy.get('button[data-target="#orderModal"]');

	// Actions
	static getProductsListInCart() {
		const cartProducts = [];

		return this.rowRecords().then(($rows) => {
			cy.wrap($rows)
				.each(($row) => {
					const cells = $row.find('td');
					const name = cells.eq(1).text();
					const price = Number(cells.eq(2).text());
					cartProducts.push({ name, price });
				})
				.then(() => cartProducts);
		});
	}

	static getTotalPrice() {
		return this.totalPriceTxt().then(($element) => {
			const text = $element.text().trim();
			return Number(text);
		});
	}

	static placeOrder() {
		this.placeOrderBtn().click();
	}
}
