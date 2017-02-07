#Functional decorators

Functions that take a function as a parameter and return a slightly modifed version of that function. It is said that they "decorate" the function.

High-order components in `React` are actually decorators.

```javascript
function authenticateBefore( fn ) {
    return function( ...args ) {
        if ( user.isAuthenticated ) {
            return fn( ...args );
        }
    }
}
```

NOTE: Decorator syntax coming in (ESnext)[https://github.com/wycats/javascript-decorators]