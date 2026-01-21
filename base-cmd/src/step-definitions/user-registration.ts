import { Given, Then, When } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page.js";
import LoginSignupPage from "../pageobjects/login-signup.page.js";
import SignupPage from "../pageobjects/signup.page.js";
import { expect } from "@wdio/globals";


Given('I am on the homepage', async () => {
    await HomePage.open();
    await expect(HomePage.sliderCarousel).toBeExisting();
})

When('I clic on the {string} button', async (_buttonName: string) => {
    await HomePage.signUpLoginButton.click();
})

When('I enter {string} as name and {string} as email', async (name: string, email: string) => {
    await LoginSignupPage.signUpNameInput.setValue(name);
    await LoginSignupPage.signUpEmailInput.setValue(email);
});

When('I clic on the Signup button', async () => {
    await LoginSignupPage.signUpButton.click();
});

Then('the signup page is loaded', async () => {
    await expect(SignupPage.signUpForm).toBeExisting();
});

