const memorize = (fn) => {
    let totalCallCount = 0;
    let passedArgs = [];
    let passedArgsVal = [];

    //Checks whether the passed arguments match with the present arguments
    const areArgsEqual = (args1, args2) => {
        if(args1.length !== args2.length)
            return false;
        for(let i=0; i<args1.length; i++){
            if(args1[i] !== args2[i])
                return false;
        }
        return true;
    }

    return (...args) => {
        // return totalCallCount value if array is empty
        if(args.length === 0)
            return totalCallCount;

        // return from passedArgsVal if the arguments provided match
        for(let i=0; i<passedArgs.length; i++){
            if(areArgsEqual(args, passedArgs[i]))
                return passedArgsVal[i];
        }

        // update the values if the arguments doesn't match
        totalCallCount++;
        passedArgs.push(args);
        const result = fn(...args);
        passedArgsVal.push(result);
        return result;
    }
}

const fn = (...args) => {
    let sum = 0;
    for(let i=0; i<args.length; i++)
        sum += args[i];
    return sum;
}

const call = memorize(fn);

console.log(call(1, 2, 3, 4, 5));
console.log(call());
console.log(call(1, 2, 3, 4, 5));
console.log(call());
console.log(call(1, 2, 3));
console.log(call());