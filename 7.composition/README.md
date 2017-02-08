#Composition

Probably the central piece to a well architected functional programming codebase. 

Rooted in mathematics: ( f ∘ g )( x ) -> g( f( x ) )

Back to reality...
```javascript
const increment = a => a + 1;
const double = a => a + a;

const incrementAndDouble = a => double( increment( a ) )

const compose = ( f, g ) => ( x ) => f( g( x ) );
const incrementAndDouble = compose( double, increment );
```

Notice the order of the applications!
```javascript
const pipe = ( f, g ) => ( x ) => g( f( x ) );
```

Composition can be used to create complex operations while defering the computation in time.

**Questions**

