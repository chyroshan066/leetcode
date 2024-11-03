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