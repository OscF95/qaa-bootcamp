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
public get homeIconButton () {
        return $('a[href="/"] i.fa.fa-home');
    }

public get signUpLoginButton () {
        return $('a[href="/login"]');
    }





public async validateHomePage(){
    let styleColorOrange = await $(this.)



/*
    let itemSubTotalLocator = await $(this.itemsSubTotal); //obtener elemento
   let itemSubTotalText = await itemSubTotalLocator.getText(); //obtener texto
   console.log("this is price element= "+itemSubTotalText);
   itemSubTotalText = itemSubTotalText.replace("Item total: $","");  //quitar $
   let itemSubTotalNumber = Number(itemSubTotalText);// transformar en numero

   console.log("este es el total "+ itemSubTotalNumber);
   console.log("este es el tipo ", typeof itemSubTotalNumber);

   return itemSubTotalNumber//devolver resultado
}

 
public async validateUrl(expectedUrl){
    await expect(await browser.getUrl()).toEqual(expectedUrl);*/
}


}

export default new HomePage();


