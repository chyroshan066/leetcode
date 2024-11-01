//Creating a closure
const createCounter = (n) => {
    return function(){
        return n++; //First returns n and then increases the value by 1 for each subsequent call
    }
}

//Using classes to solve the same problem
// class createCounter{
//     constructor(n){
//         this.n = n;
//     }
//     increment(){
//         return this.n++;
//     }
// }

//Storing the returned function in "counter" variable for class
// const counter = new createCounter(10);

//Calling the increment function of the "createCounter" class to increase the value and printing in console
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());

//Storing the returned function in "counter" variable
const counter = createCounter(10);

//Calling the "counter" function and printing in console
console.log(counter());
console.log(counter());
console.log(counter());