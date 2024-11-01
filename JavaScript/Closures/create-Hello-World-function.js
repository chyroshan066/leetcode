//Creating  a closure
const createHelloWorld = () => {
    return function(){
        return "Hello World";
    }
}

//Returning a function with its lexical environment and storing it in a variable
let c = createHelloWorld();

//Calling the function in console
console.log(c());