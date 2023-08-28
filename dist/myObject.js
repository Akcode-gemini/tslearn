"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "aaliya",
    email: "aak@g.com",
    isActive: true
};
//Use of Objects in Function
function createUser({ name, isPaid }) {
    console.log(name, isPaid);
}
//to pass much more information apart from function definition like passing one more argument to the function without defining it in the parametera
let newUser = { name: "aaliya", isPaid: false, email: "aa@g.com" };
createUser({ name: "aaliya", isPaid: false });
createUser(newUser);
//to return an object
function createCourse() {
    return { name: "angular", price: 499 };
}
createCourse();
let myUser = {
    _id: "1234",
    name: "aaliya",
    email: "ak@g.com",
    isActive: false
};
myUser.email = "h@g.com";
function createUser1(user) {
    return user;
    // to access any particular property =>user.name
}
createUser1({ name: "aa", email: "aa", isActive: true });
