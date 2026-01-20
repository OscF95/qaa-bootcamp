import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/pages-rami/login.page';
import SecurePage from '../pageobjects/pages-rami/secure.page';

const pages = {
    login: LoginPage
}

/*  Default example
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
})
    


Given(
  "the user has logged into saucedemo with username and password",
  async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
  }

  Then("the user is redirected to the {string} page", async(expectedUrl)=>{
   await aboutPage.validateUrl(expectedUrl);

   
} );
);


*/

Given("the user is on the automation exercise page", async()=>{

});

When ("the home page is visible", async()=>{

});    

When ("the user clicks on Signup / Login button", async()=>{

});   

Then ("'New User Signup!' section is visible", async()=>{

}); 

