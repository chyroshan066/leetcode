const addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};

// const addTwoPromises = async function(promise1, promise2) {
//     const value1 = await promise1;
//     const value2 = await promise2;
//     return value1 + value2;
// };