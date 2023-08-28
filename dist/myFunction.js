"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => { };
loginUser("h", "h@h.com");
signUpUser("aaliya", "aK@g.com", false);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "OK";
}
//In arrow Function
const getHello = (s) => {
    return "";
};
const heroes = ["thor", "spiderman", "ironman"];
heroes.map(hero => {
    return `hero is ${hero}`;
    // can do return 2 till no type is defined
});
//Some more Functions
//void means it does not return any thing
function consoleError(errmsg) {
    console.log(errmsg);
}
//never=>Some functions never return a value
//To handle error
//The never type represents values which are never observed.In a return type,this means that the function throws an Error or terminates execution of the program
function handleError(msg) {
    throw new Error(msg);
}
//never also appears when TypeScript determines there's nothing left in a union
function fn(x) {
    if (typeof x === "string") {
        //do something
    }
    else if (typeof x === "number") {
        //do something else
    }
    else {
        x; // has never type
    }
}
