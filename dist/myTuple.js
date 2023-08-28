"use strict";
const user = [1, "hc"];
const tupUser = ["hc", 131, true,]; //order is stricted in tuple
const newUser = [112, "aa.com"];
newUser[1] = "hc.com"; //values can change
newUser.push(45); //we can push in tuples irrespective of strictness
