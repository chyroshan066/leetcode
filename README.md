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