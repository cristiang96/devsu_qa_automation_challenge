const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
		env: {
			demoBlazeApiUrl: 'https://api.demoblaze.com',
		},
		experimentalStudio: true,
		baseUrl: 'https://www.demoblaze.com/',
		viewportHeight: 1080,
		viewportWidth: 1920,
		specPattern: 'cypress/**/tests/*.cy.{js,ts}',
		screenshotOnRunFailure: true,
		video: false,
	},
});
