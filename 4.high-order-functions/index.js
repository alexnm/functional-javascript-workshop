// 1. SUM the numeric values from the following array using only map, reduce, filter
const values = [ 0, 1, undefined, -10, "0", 42 ];

const numericVals = values
    .filter( val => !isNaN( val ) && typeof val !== "string" )
    .reduce( ( acc, val ) => acc + val );

console.log( numericVals );

// Alternative
const numericValTilda = values.reduce( ( acc, val ) => acc + ~~val );

console.log( numericValTilda )


// 2. SUM all the values in the following structure
const nested = [ 1, 2, [ 3, 4 ], [ [ 5 ], [ 6, 7 ] ], 8 ];

const flatten = ( arr ) =>
    arr.reduce( ( sum, val ) => sum + ( Array.isArray( val ) ? flatten( val ) : val ), 0 )

console.log( flatten( nested ) );

// 3. TEST if the value 42 exists inside an array (HINT: with map and reduce)
const array = [ 101, 67, 213, 94, 59, 42, 62, 40 ];

array.map( a => a === 42 ).reduce( ( a, b ) => a || b );