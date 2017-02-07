function leftApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...fixedArgs, ...restArgs )
    }
}

const map = ( fn, array ) => array.map( fn );
const get = ( key ) => ( obj ) => obj[ key ];

const objects = [
    { id: 1, name: "Mai am" },
    { id: 2, name: "un singur" },
    { id: 3, name: "dor" },
    { id: 4, name: "Dragnea" },
    { id: 5, name: "scriitor" },
]

const getId = leftApplication( map, get( "id" ) );
const getName = leftApplication( map, get( "name" ) );

console.log( getId( objects ) );
console.log( getName( objects ) );


// 1. Starting from the left application example, write the right application function





// 2. Using the right application function, write the code that applies the array and accepts any transformation on the array
// HINT: You'll reverse engineer the array map function




