import { ChainablePromiseElement } from 'webdriverio';
import { $, $$ } from '@wdio/globals';



//función para genmerar usuario random

export function userNameGenerator(){
    const randomUserName = "ramiTestUser" + Math.floor(Math.random()*5000).toString();
    return randomUserName;
}

//función para genmerar email random
export function emailGenerator(){
    const randomEmail = userNameGenerator() + "@ramitest.com";
    return randomEmail;
}

export function passwordGenerator(desiredLength = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let passWord = '';
    
    for (let i = 0; i < desiredLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        passWord += characters[randomIndex];
    }
    
    return passWord;
}


export async function selectRandomFromDropdown(selector: string): Promise<string> {
    // Obtener todos los valores del dropdown
    const allValues = await $$(`${selector} option`).map(async (option) => {
        return await option.getValue();
    });
    
    // Filtrar el valor vacío si existe
    const validValues = allValues.filter(value => value !== '');
    
    // Seleccionar un valor aleatorio
    const randomIndex = Math.floor(Math.random() * validValues.length);
    const selectedValue = validValues[randomIndex];
    
    // Seleccionar el valor en el dropdown usando el atributo value
    await $(selector).selectByAttribute('value', selectedValue);
    
    return selectedValue;
}

export async function selectRandomCountry(selector:string) {
    const ALLCOUNTRIES = await $$(`${selector} option`).map(async (option) => {
        return await option.getValue();});
    const validValues = ALLCOUNTRIES.filter(value => value !== '');
    const randomIndex = Math.floor(Math.random() * validValues.length);
    const selectedValue = validValues[randomIndex];
    
    // Seleccionar el valor en el dropdown usando el atributo value
    await $(selector).selectByAttribute('value', selectedValue);
    
    return selectedValue;
}




/*
//función para crear nombres aleatorios

export async function randomFirstName(){
    //crear un array con posibles nombres
    let namesArray = ['Rami','Cami','Fabi','Alex','Florian','Eddie','Pedro','Carlos'];
    //crear un math ranodm que recorra el array 
    let randomName = namesArray[Math.floor(Math.random()*namesArray.length)];
    return randomName
}

//función para crear apellidos aleatorios
export async function randomLastName(){
    //crear un array con posibles apellidos
    let lastNamesArray = ['Ardila','Gonzalez','Martinez','Canales','Paredes','Peña','Klaus','Chanel'];
    //crear un math ranodm que recorra el array 
    let randomLastName = lastNamesArray[Math.floor(Math.random()*lastNamesArray.length)];
    return randomLastName
}*/