# leetcode

## JavaScript

### Closures

+ Write a function that return a new function that always returns "Hello World".

+ Given an integer n, return a counter function which initially returns n and then returns 1 more than the previous value every subsequent time.

+ Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
    - toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
    - notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

+ Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
    - increment() increases the current value by 1 and then returns it.
    - decrement() reduces the current value by 1 and then returns it.
    - reset() sets the current value to init and then returns it.

### Basic Array Transformations

+ Given an integer array arr and a mapping function fn, return a new array such that returnedArray[i] = fn(arr[i], i). Solve it without the built-in Array.map method.

+ Given an integer array arr and a filtering function fn, return a filtered array filteredArr which should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. Solve it without the built-in Array.filter method.

+ Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element. If the length of the array is 0, the function should return init. Solve it without using the built-in Array.reduce method.

### Function Transformations

+ Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions. The function composition of an empty list of functions is the identity function f(x) = x. You may assume each function in the array accepts one integer as input and returns one integer as output.

+ Write a function argumentsLength that returns the count of arguments passed to it.

+ Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
    - The first time the returned function is called, it should return the same result as fn.
    - Every subsequent time it is called, it should return undefined.