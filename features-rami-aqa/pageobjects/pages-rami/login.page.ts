import { $ } from '@wdio/globals'
import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    //selectors

public get newUserSignUpVisible () {
        return $('//h2[text()="New User Signup!"]');
    }
public get nameBoxSignUpSection () {
        return $('input[data-qa="signup-name"]');
    }

public get emailBoxSignUpSection () {
        return $('input[data-qa="signup-email"]');
    }

public get signUpButton () {
        return $('button[data-qa="signup-button"]');
    }





    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
