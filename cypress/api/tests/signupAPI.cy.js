const { SignupAPI } = require('../../api/endpoints/signupAPI');
const { UserEntity } = require('../entities/userEntity');

describe('Signup API', () => {
	context('POST /signup - Create user', () => {
		it('Should be able to create a new user', () => {
			const user = new UserEntity();
			SignupAPI.post(user.username, user.password).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body).to.eq('');
			});
		});
	});
	context('POST /signup (Negative) - Create user', () => {
		const user = new UserEntity();
		beforeEach(() => {
			SignupAPI.post(user.username, user.password);
		});
		it('Should throw an error when creating an existent user', () => {
			SignupAPI.post(user.username, user.password).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body.errorMessage).to.eq('This user already exist.');
			});
		});
	});
});
