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

+ Given a function fn, return a memoized version of that function. A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

### Promises and Time

+ Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

+ Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

+ Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn. If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

+ Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn. After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked. The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

+ Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function. The time limited function should follow these rules:
    - If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
    - If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".