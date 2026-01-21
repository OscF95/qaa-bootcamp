import Page from "./page";

export class SignupPage extends Page {

    public get signUpForm() {
        return $('form[action="/signup"]');
    }
}

export default new SignupPage();