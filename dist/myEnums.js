"use strict";
//when you want to restrict the user's choice
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice["WINDOW"] = "Window";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH"; //if you initialize with a string then you need to initialize each line
})(SeatChoice || (SeatChoice = {})); //It generates IIFE but on using const enum it doesn't produce more code
const seat = SeatChoice.AISLE;
