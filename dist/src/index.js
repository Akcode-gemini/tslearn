"use strict";
console.log("typescript is here");
class User6 {
    constructor(email, name) {
        // city:string=""
        //to allow the string to be accessible within the class only and not outside 
        this.city = "bareilly";
        this.email = email; //line6
        this.name = name;
    }
}
const b = new User6("asd@.com", "aaliya");
