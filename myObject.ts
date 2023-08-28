const User={
    name:"aaliya",
    email:"aak@g.com",
    isActive:true
}

//Use of Objects in Function
function createUser({name,isPaid}:{name:string;isPaid:boolean}){
    console.log(name,isPaid)
}
    //to pass much more information apart from function definition like passing one more argument to the function without defining it in the parametera
    let newUser={name:"aaliya",isPaid:false,email:"aa@g.com"}


createUser({name:"aaliya",isPaid:false})
createUser(newUser)



//to return an object
function createCourse():{name:string,price:number}{
    return{name:"angular",price:499}
}
createCourse()
//Type aliases
type User={
    // to save in the database
    readonly _id:string
    name:string,
    email:string,
    isActive:boolean
    creditCardDetails?:"number"//not all users have so it is marked as optional
}
let myUser:User={
    _id:"1234",
    name:"aaliya",
    email:"ak@g.com",
    isActive:false
}
myUser.email="h@g.com"
// cannot assign myUser._id="567" as it is a readonly property
type User1={
    name:string,
    email:string,
    isActive:boolean
}
function createUser1(user:User1):User1{
    return user
    // to access any particular property =>user.name
}
createUser1({name:"aa",email:"aa",isActive:true})

//to combine the types
type cardNumber={
    cardNum:number
}
type cardDate={
    cardD:string
}
type cardDetails=cardNumber & cardDate &{
    cvv:number
}
//objects are dynamic in Js
let employee:{
    id:number,
    name:string
}={id:1,name:"aaliya"}

export{}