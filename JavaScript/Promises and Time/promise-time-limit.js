// const timeLimit = (fn, t) => {
//     return async(...args) => {
//         return await new Promise((resolve, reject) => {
//             let timeOut = setTimeout(() => {
//                 reject("Time Limit Exceeded");
//             }, t);

//             fn(...args)
//                 .then(resolve)
//                 .catch(reject)
//                 .finally(() => clearTimeout(timeOut));
//         })
//     }
// }

// const add = (...args) => {
//     let sum = 0;
//     for(let i=0; i<args.length; i++)
//         sum += args[i];
//     return sum;
// }

// const call = timeLimit(add, 1000);
// let result = call([2, 4, 6, 8]);
// console.log(result);

//Using Promise.race()
const timeLimit = (fn, t) => {
    return async(...args) => {
        let resolvePromise = fn(...args);
        let rejectPromise = new Promise((reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t)
        });

        //Returns whichever promise completes first
        return Promise.race([resolvePromise, rejectPromise]);
    }
}