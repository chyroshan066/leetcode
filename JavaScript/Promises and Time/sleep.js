const sleep = async(millis) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis)
    })
}

// const c = sleep(100);
// console.log(c.then());