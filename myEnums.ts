//when you want to restrict the user's choice
enum SeatChoice{
    AISLE=10,
    MIDDLE=22,//cam customize the number it can be incremented in follow up
    WINDOW="Window",
    FOURTH=5//if you initialize with a string then you need to initialize each line
}//It generates IIFE but on using const enum it doesn't produce more code
const seat=SeatChoice.AISLE