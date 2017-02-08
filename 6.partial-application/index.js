function leftApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...fixedArgs, ...restArgs )
    }
}

const map = ( fn, array ) => array.map( fn );
const pluck = ( key ) => ( obj ) => obj[ key ];

const objects = [
    { id: 1, name: "Mai am" },
    { id: 2, name: "un singur" },
    { id: 3, name: "dor" },
    { id: 4, name: "Dragnea" },
    { id: 5, name: "scriitor" },
]

const pluckId = leftApplication( map, pluck( "id" ) );
const pluckName = leftApplication( map, pluck( "name" ) );

console.log( pluckId( objects ) );
console.log( pluckName( objects ) );


// 1. Starting from the left application example, write the right application function

function rightApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...restArgs,  ...fixedArgs )
    }
}

// 2. Using the right application function, write the code that applies the array and accepts any transformation on the array
// HINT: You'll reverse engineer the array map function

const mappedArray = rightApplication( map, objects );

console.log( mappedArray( pluck( "id" ) ) )
console.log( mappedArray( pluck( "name" ) ) )