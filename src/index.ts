console.log("typescript is here");

class User6{
    //should be known before hand

    email:string
    name:string
    // city:string=""
    //to allow the string to be accessible within the class only and not outside 
    private city:string="bareilly"

    constructor(email:string,name:string){
        this.email=email;//line6
        this.name=name
    }
}
const b =new User6("asd@.com","aaliya")