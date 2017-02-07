#Partial Application

Coming back to the idea of passing parameters to functions...

In order to perform partial application, we need to take a function with `n` parameters, apply `m` parameters to it and we get back a function with `n-m` parameters.

```javascript
function partialApplication( f, a ) {
    return function( b ) {
        return f( a, b )
    }
}

function sum = ( a, b ) => a + b;
function addFive = partialApplication( sum, 5 );
addFive( 6 ); // 11

```

Let's make it generic
```javascript
function partialApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...fixedArgs, ...restArgs )
    }
}
```

When the `applied` parameters are the first of the original function, it is called `left application`.

#Currying

Converting a single function of `n` arguments into `n` functions with a single argument each. Named after *Haskell Curry*, a strong influencer in functional mathematics and functional programming.

```javascript
const add = ( a ) => ( b ) => ( c ) => a + b + c;
add( 1 )( 2 )( 3 ); // 6
```

A curried function is closer to the mathematical meaning of a function

**Questions**
* Where the hell would I use this?
