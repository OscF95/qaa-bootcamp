/*
How do I know this page is loaded?
- I see a form
What actions can the user do here?
- fill form with personal info
What information can I read here?
-instead of read, I submit.
*/

import { $, $$, expect } from '@wdio/globals'
import Page from './page';
import { ChainablePromiseElement } from 'webdriverio';
import DataStorage from "./data.storage.ts"; // Importa la clase DataStorage
import { passwordGenerator, selectRandomFromDropdown, selectRandomCountry} from '../../utils-rami/testHelpers';

class AccountInfo extends Page{

//Selectors
//with this selector we know we are in the correct page
public get enterAccountText () {
        return $('//b[text() = "Enter Account Information"]');
    }
//Form selectors

//Enter account selectors

public get titleGender(){
    return $('[id="id_gender1"]');
} 
public get nameField(){
    return $('#name');
}
public get emailField(){
    return $('#email');
}
public get passwordField(){
    return $('#password');
}
/*
public get daysField(){
    return $('#days');
}
public get monthsField(){
    return $('#months');
}

public get yearsField(){
    return $('#years');
}
*/
daysFieldLocator = "#days";
monthsFieldLocator = "#months";
yearsFieldLocator = "#years";

public get newsLetterSelector(){
    return $('#newsletter');
    //return $('label[for="newsletter"]');
}

public get receiveSpecialOffersSelector(){
    //return $('#optin');
    return $('label[for="optin"]'); 
}

//Address Information sleectors
public get firstNameField(){
    return $('#first_name');
}

public get lastNameField(){
    return $('#last_name');
}

public get companyField(){
    return $('#company');
}

public get address1Field(){
    return $('#address1');
}

public get address2Field(){
    return $('#address2');
}

countryFieldLocator = "#country";

public get stateField(){
    return $('#state');
}

public get cityField(){
    return $('#city');
}
public get zipCodeField(){
    return $('#zipcode');
}

public get mobileNumberField(){
    return $('#mobile_number');
}

//create account button
public get createAccountButton(){
    return $('button[data-qa="create-account"]');
}




//Actions & steps

//"the user verifies that ENTER ACCOUNT INFORMATION is visible"
public async accountInfoPageValidation () {
       
    await expect(this.enterAccountText).toBeDisplayed()
        
    }

//"the user fills details: Title, Name, Email, Password, Date of birth"
public async genderSelection(){
    await this.titleGender.click();
    await expect(this.titleGender).toBeSelected();
}


public async nameValidation(){
    let expectedName = DataStorage.get("userName"); //ir a data storage ir usar el metodo get para obetner los valores, pero dbeo solo hjacer referencia al key para opbetner al valor.
    await expect(this.nameField).toHaveValue(expectedName)
}

public async emailValidation(){
    let expectedEmail = DataStorage.get("generatedEmail"); //ir a data storage ir usar el metodo get para obetner los valores, pero dbeo solo hjacer referencia al key para opbetner al valor.
    await expect(this.emailField).toHaveValue(expectedEmail)
}
//fill form  

public async passwordFill(){
    await this.passwordField.setValue(passwordGenerator());
}

public async daysMonthsAndYearsFill(selector: string): Promise<string> {
    return await selectRandomFromDropdown(selector);
}

//

public async newsLetterSelection(){
    await this.newsLetterSelector.click();
}

public async receiveSpecialOfferselection(){
    await this.receiveSpecialOffersSelector.click();
  
}

//
public async firstNameFill(firstName: string){
    await this.firstNameField.setValue(firstName);
}

public async lastNameFill(lastName: string){
    await this.lastNameField.setValue(lastName);
}

public async companyFill(company: string){
    await this.companyField.setValue(company);
}

public async address1Fill(address1: string){
    await this.address1Field.setValue(address1);
}

public async address2Fill(address2: string){
    await this.address2Field.setValue(address2);
}

public async countryFill(selector: string): Promise<string> {
    return await selectRandomCountry(selector);
}

public async stateFill(state: string){
    await this.stateField.setValue(state);
}

public async cityFill(city: string){
    await this.cityField.setValue(city);
}

public async zipCodeFill(zipCode: string){
    await this.zipCodeField.setValue(zipCode);
}

public async mobileNumberFill(mobileNumber: string){
    await this.mobileNumberField.setValue(mobileNumber);
}

public async createButtonClick(){
    await this.createAccountButton.scrollIntoView();
    await this.createAccountButton.click();
}


}

export default new AccountInfo();

