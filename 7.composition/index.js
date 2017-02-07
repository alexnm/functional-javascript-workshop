const compose = ( fn, ...rest ) =>
    rest.length === 0 ?
        fn :
        ( x ) => fn( compose( ...rest )( x ) );

const increment = a => a + 1;

const double = a => a * 2;

const square = a => a * a;

const doubleIncrementAndSquare = compose( square, increment, double );

console.log( doubleIncrementAndSquare( 1 ) );

// 1. Write the PIPE function




// 2. Compose/Pipe map and filter in order to create a function that extracts the odd ids from the array of objects
// HINT: Use the curried versions of map and filter
const objects = [
    { id: 1, name: "Mai am" },
    { id: 2, name: "un singur" },
    { id: 3, name: "dor" },
    { id: 4, name: "Dragnea" },
    { id: 5, name: "scriitor" },
];

const odd = id => id % 2 === 1;
const pluckId = obj => obj.id;





// 3. (BONUS) Starting from the compose example above, write a compose function using reduce




