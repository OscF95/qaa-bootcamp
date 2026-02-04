/* 

How do I know this page is loaded?
- I can see home page is visible
What actions can the user do here?
-click on sign up
What information can I read here?
-just home page and general info
   */



import { $, expect } from '@wdio/globals'
import Page from './page';
import DataStorage from "./data.storage.js";


class HomePage extends Page{


//selectors
public get homeIcon () {
        return $('a[href="/"][style*="color: orange"]');
    }

public get signUpLoginButton () {
        return $('a[href="/login"]');
    }

public get loggedInTextLocator () {
        return $('//a[contains(., "Logged in as")]');
    }

public get usernameHomePageLocator () {
        return $('.nav.navbar-nav li a b');
    }

public get UserNameLocator () {
        return $('a[href="/login"]');
    }

public get adXButton(){
    return $('dismiss.button');
}

public get deleteButtonLocator(){
    return $('a[href="/delete_account"]');
}


// si, sleector de home, tiene el naranja, return you're ont he Home Page!!!
public async homePageNavigation () {
        console.log("Navigating to automationexercise.com...");
        await this.open(''); // Navigate to the home page first
        await this.homeIcon.waitForDisplayed({ timeout: 10000 }); // Wait for home icon to be visible
        
    }


//dar clcik en Sign Up
public async clickOnSignUp(){
    await this.signUpLoginButton.click();
}

public async closeAd(){
    await this.adXButton.click();
}

public async clickOnDeleteButton(){
    await this.deleteButtonLocator.click();
}


public async loggedInasUsernameValidation(){
    const storedUsername = DataStorage.get("userName");
    const actualText = await this.loggedInTextLocator.getText();
    expect(actualText).toContain("Logged in as");
    expect(actualText).toContain(storedUsername);
}


}



export default new HomePage();


