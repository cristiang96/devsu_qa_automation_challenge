/**
 * POM class for Product section on home page
 */
export class ProductsSection {

    // Locators
	static category = (categoryName) => cy.contains('#itemc', categoryName);
	static productCard = (productName) => cy.get('#tbodyid').get('.card-title').contains(productName);

	// Actions	
	static selectCategory(category) {
		this.category(category).click();
	}

    static selectProduct(product) {
		this.productCard(product).click();
	}
}
