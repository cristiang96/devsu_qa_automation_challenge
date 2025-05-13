/**
 * POM class for Home page
 */
export class HomePage {

    // Locators
    /* it can be: "Home", "Cart", "Log in", ..." */
	static navigationOptionBtn = (option) => cy.get('#navbarExample').get('a.nav-link').contains(option);

	// Actions
	static navigateTo(option) {
		return this.navigationOptionBtn(option).click();
	}
}
