import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/pages-rami/login.page';
import SecurePage from '../pageobjects/pages-rami/secure.page';
import HomePage from '../pageobjects/pages-rami/Home.page';
import loginPage from '../pageobjects/pages-rami/login.page';
import AccountInfoPage from '../pageobjects/pages-rami/AccountInfo.page';

const pages = {
    login: LoginPage
}



Given ("the user navigates to automationexercise website", async()=>{
    await HomePage.homePageNavigation();
});    

When ("verifies that home page is visible successfully", async()=>{
    await expect(HomePage.homeIcon).toBeDisplayed() //
}); 

When ("the user clicks on Signup Login button", async()=>{
    await HomePage.clickOnSignUp();
});   

When ("the user verifies New User Signup! is visible", async()=>{
    await loginPage.userSignUpTextIsVisible();
}); 

When ("the user enter name and email address", async()=>{
    await loginPage.fillUserAndEmail();
}); 

When ("the user clicks Signup button", async()=>{
    await loginPage.clickSubmitButton();
}); 

Then ("the user verifies that ENTER ACCOUNT INFORMATION is visible", async()=>{
    await AccountInfoPage.accountInfoPageValidation();
}); 


