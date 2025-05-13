/**
 * POM class for Purchase Information modal
 */
export class PurchaseInformationModal {
	// Locators
	static messageTxt = () => cy.get('div[class^="sweet-alert"] h2');
	static purchaseInfoTxt = () => this.messageTxt().next();
	static okBtn = () => cy.get('button[class^="confirm btn"]');

	// Actions
	static getPurchaseInformation() {
		const purchase = { message: '', information: {} };
		return cy
			.wrap(null)
			.then(() => {
				return this.messageTxt().then(($element) => {
					purchase.message = $element.text().trim();
				});
			})
			.then(() => {
				return this.purchaseInfoTxt().then(($info) => {
					const purchaseInfo = $info.html() 
                        .split(/<br\s*\/?>/i) 
                        .map(line => line.trim())
                        .filter(line => line); 

					purchaseInfo.forEach((info) => {
						if (!info.trim()) return;
						const [key, value] = info.split(':');
							purchase.information[key.trim()] = value.trim();
						
					});
				});
			})
			.then(() => purchase); 
	}

	static clickOnOk() {
		this.okBtn().click();
	}
}
