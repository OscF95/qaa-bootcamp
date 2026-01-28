import { $, expect } from '@wdio/globals'
import Page from './page';
import { userNameGenerator, emailGenerator} from '../../utils-rami/testHelpers'; // chekcxi this out, futro ramiro pro favor leee
import DataStorage from "./data.storage.js"; // Importa la clase DataStorage
import { ChainablePromiseElement } from 'webdriverio';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    //selectors

public get newUserSignUpText () {
        return $('//h2[text()="New User Signup!"]');
    }
public get nameBoxSignUpSection () {
        return $('input[data-qa="signup-name"]');
    }

public get emailBoxSignUpSection () {
        return $('input[data-qa="signup-email"]');
    }

public get signUpButton () {
        return $('button[data-qa="signup-button"]');
    }


//validar que New User Siugn Up se vea
public async userSignUpTextIsVisible () {
        
        await expect(this.newUserSignUpText).toBeDisplayed()
    }


//llenar datos    
//una variable tipo string, con una sewrie de letras.
//un arreglo, con muchas letras, 
//una función que las junte
//otra funciuón que las junte pero le añada un dominio.


        
        //randomPassword = "password"+this.numeroAzarTexto;


    public async fillUserAndEmail () {
        // Generar datos aleatorios para el usuario
        const userName = userNameGenerator();
        const generatedEmail = emailGenerator();
        
        // Guardar los datos generados en DataStorage para uso posterior en otros steps
        DataStorage.add("userName", userName);
        DataStorage.add("generatedEmail", generatedEmail);
        
        // Llenar los campos del formulario con los datos generados
        await this.nameBoxSignUpSection.setValue(userName);
        await this.emailBoxSignUpSection.setValue(generatedEmail);
    }
    public async clickSubmitButton () {
        await this.signUpButton.click();
    }

}

export default new LoginPage();
