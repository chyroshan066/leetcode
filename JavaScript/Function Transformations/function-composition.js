// const compose = (fn1, fn2, fn3) => {
//     return function(x){
//         return fn1(fn2(fn3(x)));
//     }
// }

//Using modern JavaScript syntax
const composeModern = (fn1, fn2, fn3) => (x) => fn1(fn2(fn3(x)));

//For unlimited functions and arguments
//Creates an array of unlimited number of functions i.e; takes any number of functional arguments
const composeReduce = (...funs) => {
    //Creates an array of unlimited number of values i.e; takes any number of arguments
    return (...values) => {
        //first argument is accumulator and second is current value
        return funs.reduce((val, fn) => fn(val), values);
    }
}

function plusone(x){
    return x + 1;
}
function square(x){
    return x * x;
}
function mulTwo(x){
    return x * 2
}

const result = composeModern(plusone, square, mulTwo);
console.log(result(2));