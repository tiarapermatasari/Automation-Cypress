import * as route from '@tests/helpers/route';
import * as element from '@tests/helpers/elements';
import * as asserts from '@tests/helpers/asserts';
import { ROUTES } from '@tests/consts/routes';
import * as auth from '@tests/data/login.data';
import * as login from '@tests/page/login.page';

describe('Login', () => {
    beforeEach(() => {
      route.visit(ROUTES.login);

    });

    it('Ensure the error message is displayed when user input invalid password', () => {
        element.fillField(login.usernameField, auth.INVALID_LOGIN.username);
        element.fillField(login.passwordField, auth.INVALID_LOGIN.password);
        element.click(login.loginButton);
        asserts.shouldContainText(login.errorAlert, "Epic sadface: Username and password do not match any user in this service");

    });

    it('Ensure the user will be direct to dashboard when user input valid password', () => {
      element.fillField(login.usernameField, auth.VALID_LOGIN.username);
      element.fillField(login.passwordField, auth.VALID_LOGIN.password);
      element.click(login.loginButton);
      asserts.shouldContainText(login.title, "Products");

  });

});