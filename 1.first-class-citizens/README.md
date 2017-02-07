#First class citizens

In most programming languages, functions are separate concepts, part of the language.

In functional programming, functions are treated like any other data.

```javascript
const a = 42;
const increment = a => a + 1;
```

Functions can be:
* be stored in a variable
* passed as parameters

Functions that:
* receive functions as parameters
* return functions

are called *Higher Order Functions*.