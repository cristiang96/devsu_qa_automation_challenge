/**
 * POM class for Place order modal
 */
export class PlaceOrderModal {
	// Locators
	static totalLabel = () => cy.get('#totalm');
	static nameInput = () => cy.get('#name');
	static countryInput = () => cy.get('#country');
	static cityInput = () => cy.get('#city');
	static creditCardInput = () => cy.get('#card');
	static monthInput = () => cy.get('#month');
	static yearInput = () => cy.get('#year');
	static closeBtn = () => cy.contains('button', 'Close');
	static purchaseBtn = () => cy.get('button[onclick^="purchaseOrder"]');

	// Actions
	static fillInOrder(orderInformation) {
        this.nameInput().should('be.visible');
		this.nameInput().click().type(orderInformation.name);
		this.countryInput().type(orderInformation.country);
		this.cityInput().type(orderInformation.city);
		this.creditCardInput().type(orderInformation.card);
		this.monthInput().type(orderInformation.month);
		this.yearInput().type(orderInformation.year);
		this.purchaseBtn().click();
	}

	static getTotal() {
		return this.totalLabel().then(($element) => {
			return $element.text();
		});
	}
}
