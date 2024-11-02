const createCounter = (init) => {
    const originalVal = init;

    const increment = () => {
        return ++init;
    }

    const decrement = () => {
        return --init;
    }

    const reset = () => {
        init = originalVal;
        return init;
    }

    return {increment, decrement, reset};
}

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());