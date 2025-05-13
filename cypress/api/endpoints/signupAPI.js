/**
 * API class for /signup endpoint
 */
export class SignupAPI {
	static endpoint = `${Cypress.env('demoBlazeApiUrl')}/signup`;

	/**
	 * Creates the given user
	 * @param username the user name
	 * @param password the password of the user
	 * @returns the API cypress response
	 */
	static post(username, password) {
		return cy.request({
			method: 'POST',
			body: { username, password },
			url: this.endpoint,
			failOnStatusCode: false,
		});
	}
}
// {errorMessage: "This user already exist."}