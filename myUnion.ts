//when you are not sure what type of data has to come in
// to avoid any
let score:number|string=33
type Admin={
    username:string,
    id:number
}
type User2={
    name:string,
    id:number
}
let variable:User2|Admin={name:"aaliya",id:2}

function getDbId(id:number|string){
    //making API calls
    console.log(`DB id is:${id}`)
    //id.toUpperCase() gives error because it treats it not just as a number or a string but a new data type that can be number or a string
    // In case of this we can use narrowing
    if(typeof id ==="string"){
        id.toUpperCase()// known as union narrowing
    }
}

//array
//to have multiple data types in array
const data:(number|string)[]=[1,2,3,"4"]

// literal type of assignment
let seatAllotment:"aisle"|"middle"|"window"// no other value is acceptable 
type quantity=50|100
let q:quantity=100
let c:50=50