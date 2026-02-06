/* 

How do I know this page is loaded?
- I can see home page is visible
What actions can the user do here?
-click on sign up
What information can I read here?
-just home page and general info
   */



import { $, expect, browser } from '@wdio/globals'
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
    return $('#dismiss-button');
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
    console.log("Clicking Delete Account button...");
    await this.deleteButtonLocator.waitForClickable({ timeout: 10000 });
    
    // Use JavaScript click to bypass any overlays
    await browser.execute((element) => {
        element.click();
    }, await this.deleteButtonLocator);
    
    await browser.pause(2000); // Wait for navigation
    console.log(`Navigated to: ${await browser.getUrl()}`);
}


public async loggedInasUsernameValidation(){
    const storedUsername = DataStorage.get("userName");
    
    // Debug: Log current URL and wait for home page
    const currentUrl = await browser.getUrl();
    console.log(`Current URL: ${currentUrl}`);
    
    // Wait for home page to be loaded by checking home icon first
    await this.homeIcon.waitForDisplayed({ timeout: 10000 });
    console.log("Home page icon is visible");
    
    // Check if element exists in DOM
    const elementExists = await this.loggedInTextLocator.isExisting();
    console.log(`"Logged in as" element exists in DOM: ${elementExists}`);
    
    if (elementExists) {
        const isDisplayed = await this.loggedInTextLocator.isDisplayed();
        console.log(`"Logged in as" element is displayed: ${isDisplayed}`);
    }
    
    await this.loggedInTextLocator.waitForDisplayed({ timeout: 10000 });
    const actualText = await this.loggedInTextLocator.getText();
    console.log(`Logged in text: ${actualText}`);
    expect(actualText).toContain("Logged in as");
    expect(actualText).toContain(storedUsername);
}


}



export default new HomePage();


