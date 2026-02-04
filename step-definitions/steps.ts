import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/pages-rami/login.page';
import SecurePage from '../pageobjects/pages-rami/secure.page';
import HomePage from '../pageobjects/pages-rami/Home.page';
import loginPage from '../pageobjects/pages-rami/login.page';
import AccountInfoPage from '../pageobjects/pages-rami/AccountInfo.page';
import AccountCreatedPage from '../pageobjects/pages-rami/AccountCreated.page';
import DeleteAccountPage from '../pageobjects/pages-rami/DeleteAccount.page';

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

When ("the user verifies that ENTER ACCOUNT INFORMATION is visible", async()=>{
    await AccountInfoPage.accountInfoPageValidation();
    
}); 

When("the user fills details: Title, Name, Email, Password, Date of birth", async()=>{
    await AccountInfoPage.genderSelection();
    await AccountInfoPage.nameValidation();
    await AccountInfoPage.emailValidation();
    await AccountInfoPage.passwordFill();
    await AccountInfoPage.daysMonthsAndYearsFill(AccountInfoPage.daysFieldLocator);
    await AccountInfoPage.daysMonthsAndYearsFill(AccountInfoPage.monthsFieldLocator);
    await AccountInfoPage.daysMonthsAndYearsFill(AccountInfoPage.yearsFieldLocator);
});

When("the user select checkbox Sign up for our newsletter", async()=>{
    await AccountInfoPage.newsLetterSelection();
});

When("the user select checkbox Receive special offers from our partners", async()=>{
    await AccountInfoPage.receiveSpecialOfferselection();
});

When("the user fills details: {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {int}, {int}", async(firstName, lastName, company, address1, address2, country, state, city, zipCode, mobileNumber)=>{
    await AccountInfoPage.firstNameFill(firstName);
    await AccountInfoPage.lastNameFill(lastName);
    await AccountInfoPage.companyFill(company);
    await AccountInfoPage.address1Fill(address1);
    await AccountInfoPage.address2Fill(address2);
    //para country, llamar función, y pasar parmetro dentro de la función, como línea 51.
    await AccountInfoPage.countryFill(AccountInfoPage.countryFieldLocator);
    await AccountInfoPage.stateFill(state);
    await AccountInfoPage.cityFill(city);
    await AccountInfoPage.zipCodeFill(zipCode);
    await AccountInfoPage.mobileNumberFill(mobileNumber);
});
/* Este es mi paso original, lo copié arrioba y lo edité para hacer algo diferente, pero dejo este comentado por si acaso
When("the user fills details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async()=>{
    await AccountInfoPage.firstNameFill();
    await AccountInfoPage.lastNameFill();
    await await AccountInfoPage.companyFill();
});
*/
When("the user clicks Create Account button", async()=>{
    await AccountInfoPage.createButtonClick();
});

When("the user verifies that {string} is visible", async(createAccountText)=>{
    
    await AccountCreatedPage.accountCreatedTextValidation(createAccountText);
    //await AccountCreatedPage.accountCreatedCorrectUrl();
});

When("the user clicks Continue button", async()=>{
    await AccountCreatedPage.continueButtonClick();
});

When("the user verifies logged in as username is visible", async()=>{
    await HomePage.closeAd();
    await HomePage.loggedInasUsernameValidation();
});

When("When the user clicks Delete Account button", async()=>{
    await HomePage.clickOnDeleteButton();
});

When("the user verifies that {string} text is visible", async(deletedAccountText)=>{
    await DeleteAccountPage.validateDeletedAccountText(deletedAccountText);
});

Then("the user clicks Continue button", async()=>{
    await DeleteAccountPage.clickOncontinueButton();
}); 