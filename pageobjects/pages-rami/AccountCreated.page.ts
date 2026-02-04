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
    await this.continueButtonLocator.click()
}

//page readiness wait



}

export default new AccountCreated();
