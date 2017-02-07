const obj = {
    value: 42
}

console.log( obj );

obj.value = 43;
obj.newValue = "test";

console.log( obj );

Object.freeze( obj );

obj.value = 42;
delete obj.newValue;

console.log( obj );
