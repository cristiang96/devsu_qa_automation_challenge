/**
 * API class for /login endpoint
 */
export class LoginAPI {
	static endpoint = `${Cypress.env('demoBlazeApiUrl')}/login`;

	/**
	 * Authenticates the given user to log in
	 * @param username the user name
	 * @param password the password of the user
	 * @returns the API cypress response
	 */
	static post(username, password) {
		return cy.request({
			method: 'POST',
			url: this.endpoint,
			body: { username, password },
			failOnStatusCode: false,
		});
	}
}
