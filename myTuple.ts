const user:(string|number)[]=[1,"hc"]
const tupUser:[string,number,boolean]=["hc",131,true,]//order is stricted in tuple

//array with order restriction
type User3=[number,string]
const newUser:User3=[112,"aa.com"]
newUser[1]="hc.com"//values can change
newUser.push(45)//we can push in tuples irrespective of strictness
//tuples is a fixed length array where each element has a particular value.
// tuples are useful when we have two types i.e.key value pair