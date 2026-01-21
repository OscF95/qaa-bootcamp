



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