/*
How do I know this page is loaded?
- I see a form
What actions can the user do here?
- fill form with personal info
What information can I read here?
-instead of read, I submit.
*/

import { $ } from '@wdio/globals'
import Page from './page';

class AccountInfo extends Page{

//Selectors
//with this selector we know we are in the correct page
public get newUserSignUpText () {
        return $('//b[text() = "Enter Account Information"]');
    }
//Actions
public async accountInfoPageValidation () {
        
        if(await this.newUserSignUpText){
            console.log("You're in the Enter Account Information page");
        }
    }


//page readiness wait


}

export default new AccountInfo();
