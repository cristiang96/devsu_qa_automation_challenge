const { LoginAPI } = require('../endpoints/loginAPI');
const { SignupAPI } = require('../endpoints/signupAPI');
const { UserEntity } = require('../entities/userEntity');

describe('Login API', () => {
	context('POST /login - Login with valid credentials', () => {
		const user = new UserEntity();
		beforeEach(() => {
			SignupAPI.post(user.username, user.password);
		});
		it('Should be able to login with valid credentials', () => {
			LoginAPI.post(user.username, user.password).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body).to.contain('Auth_token')
			});
		});
	});
	context('POST /login (Negative) - Login with invalid credentials', () => {
		it('Should throw an error when logging in with invalid username and password', () => {
			const inexistentUser = new UserEntity();
			LoginAPI.post(inexistentUser.username, inexistentUser.password).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body.errorMessage).to.eq('User does not exist.');
			});
		});
	});
	context('POST /login (Negative) - Login with wrong password', () => {
		const user = new UserEntity();
		beforeEach(() => {
			SignupAPI.post(user.username, user.password);
		});
		it('Should throw an error when logging in with correct username but wrong pasword', () => {
			LoginAPI.post(user.username, `${user.password}0-$%`).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body.errorMessage).to.eq('Wrong password.');
			});
		});
	});
});
