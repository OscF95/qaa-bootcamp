/* 

How do I know this page is loaded?
- I can see home page is visible
What actions can the user do here?
-click on sign up
What information can I read here?
-just home page and general info
   */


import { $ } from '@wdio/globals'
import Page from './page';


class HomePage extends Page{


//selectors
public get homeIcon () {
        return $('a[href="/"][style*="color: orange"]');
    }

public get signUpLoginButton () {
        return $('a[href="/login"]');
    }

// si, sleector de home, tiene el naranja, return you're ont he Home Page!!!
public async homePageValidation () {
        
        if(await this.homeIcon){
            console.log("You're in the Home Page");
        }
    }
//dar clcik en Sign Up
public async clickOnSignUp(){
    await this.signUpLoginButton.click();
}


}



export default new HomePage();


