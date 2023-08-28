interface User4{
    email:string,
    userId:number
    googleId?:string
    //startTrial:()=>string
     //OR
     startTrial():string,
     getCoupon(couponName:string,value:number):number
}//loosely form of the class
//you can reopen the interface
interface User4{
    githubToken:string
}
const a:User4={email:"a@.com",userId:122,
githubToken:"github",
startTrial:()=>{
    return "Trial"
},
getCoupon(name:"lottery", value:10) {
    return value
},
}
//we can apply inheritance on interface
interface Admin1 extends User4{
    role:"admin"|"admin1"
}
//difference between Interface and Type
/*Extending an interface using extends keyword and type can be extended using intersection (&)*/