import Page from "./page";

export class LoginSignupPage extends Page {

    public get signUpNameInput() {
        return $('input[data-qa="signup-name"]');
    }

    public get signUpEmailInput() {
        return $('input[data-qa="signup-email"]');
    }

    public get signUpButton() {
        return $('button[data-qa="signup-button"]');
    }

}

export default new LoginSignupPage();