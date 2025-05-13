const { faker } = require('@faker-js/faker');

/**
 * Class for User entity
 */
export class UserEntity {
	username;
	password;

	constructor() {
		(this.username = faker.internet.username()), (this.password = faker.internet.password({ length: 8 }));
	}
}
