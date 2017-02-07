#High order functions

If a function satisfies one of the following conditions:
* accepts a function as a parameter
* returns a function
then the it is called a *high order function* or *functor*

```javascript
const array = [ 0, 1, 2, 3, 4 ];

const plusOne = array.map( a => a + 1 );

const odd = array.filter( a => a % 2 === 1 );

const sum = array.reduce( ( a, b ) => a + b );
```

A note on parameters, what's wrong with the following example?
```javascript
const strings = [ "0", "1", "2", "3", "4" ];
const numbers = strings.map( parseInt );
```

*Questions*
* Should we worry about creating too many functions in our code?
* What is the fundamental difference between map and forEach?
* Are the native map, filter, reduce functions from JS closer to OOP or FP?
