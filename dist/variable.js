"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let variable_name:type=value
let greetings = "Hello Aaliya";
//greeting =6 will give error as it is declared string
greetings.toLowerCase();
console.log(greetings);
//number js does not have any float or double
//defining a number and you are immediately assingning the value so there is no need to define the type as typescript can detect it and it will give the error if we assign any other type to it
//type inference it is smart enough to recognise the type
let userId = 456;
userId.toFixed();
//boolean
let isLoggedIn = false;
//any : to get rid of defining the type but not a good practice
//when you don't any value to cause type checking
//also when we don't know the type
let hero;
function getHero() {
    return "thor";
}
hero = getHero();
