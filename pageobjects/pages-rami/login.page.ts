import { $ } from '@wdio/globals'
import Page from './page';
import { userNameGenerator, emailGenerator} from '../../utils-rami/testHelpers'; // chekcxi this out, futro ramiro pro favor leee


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
        
        if(await this.newUserSignUpText){
            console.log("The New User Sign Up Text Is Visible and Correct");
        }
    }


//llenar datos    
//una variable tipo string, con una sewrie de letras.
//un arreglo, con muchas letras, 
//una función que las junte
//otra funciuón que las junte pero le añada un dominio.


        
        //randomPassword = "password"+this.numeroAzarTexto;


    public async fillUserAndEmail () {
        
        await this.nameBoxSignUpSection.setValue(userNameGenerator());
        await this.emailBoxSignUpSection.setValue(emailGenerator());
    }
    public async clickSubmitButton () {
        await this.signUpButton.click();
    }

}

export default new LoginPage();
