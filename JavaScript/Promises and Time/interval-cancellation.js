const cancellable = (fn, args, t) => {
    //calls the function at t=0
    fn(...args);

    //checks for the condition whether cancelTimeMs is less than t or not
    let id =  setInterval(() => {
                  fn(...args);
              }, t);
            
    //cancels calling of the function when t exceeds cancelTimeMs
    return function(){
       clearInterval(id);
    }
}

const mul5 = (z) => {
    console.log(z *  5);
}

const cancelFn = cancellable(mul5, [4], 500);
setTimeout(cancelFn, 2000);
