const cancellation = (fn, args, t) => {
    let isCancelled = false;
    
    setTimeout(() => {
        if(!isCancelled)
            fn(...args);
    }, t);

    return function(){
        isCancelled = true;
    }
}

// function fn(args){
//     console.log(args * 5);
// }

// const cancelFn = (cancelTimeMs) => {
//     return {cancelTimeMs, "Function execution cancelled"};
// }

// const c = cancellation(fn, 20, 20);
// c(100, cancelFn);

