const once = (fn) => {
    let firstCall = true;
    return (...args) => {
        if(firstCall){
            firstCall = false;
            return fn(...args);
        }
    }
}

function fn(...args){
    let sum = 0;
    for(let i=0; i<args.length; i++)
        sum += args[i];
    return sum;
}

const call = once(fn);

console.log(call(3,4,6,7,9,11,15,17));  //returns 72
console.log(call(3,4,6,7));             //returns undefined