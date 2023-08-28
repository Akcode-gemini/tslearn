function greet(name:string|null|undefined){
    console.log(name.toUpperCase())
}
greet(null)//strict null checks