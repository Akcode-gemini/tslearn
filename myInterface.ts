interface User4{
    email:string,
    userId:number
    googleId?:string
    //startTrial:()=>string
     //OR
     startTrial():string,
     getCoupon(couponName:string,value:number):number
}//loosely form of the class
const a:User4={email:"a@.com",userId:122,
startTrial:()=>{
    return "Trial"
},
getCoupon(name:"lottery", value:10) {
    return value
},
}