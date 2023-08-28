"use strict";
//when you are not sure what type of data has to come in
// to avoid any
let score = 33;
let variable = { name: "aaliya", id: 2 };
function getDbId(id) {
    //making API calls
    console.log(`DB id is:${id}`);
    //id.toUpperCase() gives error because it treats it not just as a number or a string but a new data type that can be number or a string
    // In case of this we can use
    if (typeof id === "string") {
        id.toUpperCase(); // known as union narrowing
    }
}
//array
//to have multiple data types in array
const data = [1, 2, 3, "4"];
// literal type of assignment
let seatAllotment; // no other value is acceptable 
