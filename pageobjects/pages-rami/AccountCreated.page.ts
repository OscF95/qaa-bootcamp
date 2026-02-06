/*
How do I know this page is loaded?
- It's not really a page, but more of a status. after clicking create acct button, you get a message
What actions can the user do here?
- create their acct
What information can I read here?
- verify acct was created
*/

import { $, $$, expect, browser } from '@wdio/globals'
import Page from './page';

class AccountCreated extends Page{

//Selectors
accountCreatedLocator = $('//b[text() = "Account Created!"]');

public get continueButtonLocator(){
    return $('a[data-qa="continue-button"]')
}




//Actions

public async accountCreatedCorrectUrl(){
    await expect(browser).toHaveUrlContaining('account_created')
}

public async accountCreatedTextValidation(createAccountText: string) {
    await browser.pause(10000);   
    await expect(this.accountCreatedLocator).toHaveText(createAccountText)
        
    }

public async continueButtonClick(){
    console.log("Waiting for Continue button...");
    
    const currentUrl = await browser.getUrl();
    console.log(`Current URL before click: ${currentUrl}`);
    
    // Wait for button to be displayed
    await this.continueButtonLocator.waitForDisplayed({ timeout: 10000 });
    
    // Try multiple strategies to click the button
    try {
        // Strategy 1: Use JavaScript click to bypass any overlay
        console.log("Attempting JavaScript click on Continue button...");
        await browser.execute((element) => {
            element.click();
        }, await this.continueButtonLocator);
        
        await browser.pause(1000);
        console.log(`URL after JS click: ${await browser.getUrl()}`);
        
    } catch (error) {
        console.log("JavaScript click failed, trying regular click");
        await this.continueButtonLocator.click();
    }
    
    // Wait for navigation
    await browser.pause(3000);
    
    const finalUrl = await browser.getUrl();
    console.log(`Final URL: ${finalUrl}`);
    
    // If still on account_created page, something is wrong
    if (finalUrl.includes('account_created')) {
        console.log("WARNING: Still on account_created page after clicking Continue!");
    }
}

//page readiness wait



}

export default new AccountCreated();
