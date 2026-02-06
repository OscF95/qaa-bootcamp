/*
How do I know this page is loaded?
-I can see I'm logged in with myt user name, and I havce the option to delete acct
What actions can the user do here?
-delete acct
What information can I read here?
-my user name
*/

import { $, $$, expect, browser } from '@wdio/globals'
import Page from './page';

class DeleteAccount extends Page{
    
//Selectors

public get deletedAccountLocator(){
    return $('//b[contains(., "Account Deleted!")]')
}

public get continueButtonLocator(){
    return $('a[data-qa="continue-button"]')
}

//Actions

public async validateDeletedAccountText(deletedAccountText: string){
    await this.deletedAccountLocator.waitForDisplayed({ timeout: 10000 });
    await expect(this.deletedAccountLocator).toHaveText(deletedAccountText);
}

public async clickOncontinueButton(){
    await this.continueButtonLocator.waitForClickable({ timeout: 10000 });
    
    // Use JavaScript click to bypass any overlays
    await browser.execute((element) => {
        element.click();
    }, await this.continueButtonLocator);
}


}

export default new DeleteAccount();
