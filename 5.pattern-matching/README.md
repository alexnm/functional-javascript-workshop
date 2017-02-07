#Pattern matching

Implemented since ES2015 in the form of `destructuring` and `rest operator`.

```javascript
const array = [ 0, 1, 2, 3, 4 ];

const [ first, ...rest ] = array; // first = 0, rest = [ 1, 2, 3, 4 ]
const [ first, , third, , fifth ] = array;

```

works with objects too
```javascript
const obj = {
    value: 42
}

const { value } = obj; // value = 42
```

The use of destructuring and rest is very useful in defining function parameters.
```javascript
function fullName( { firstName, lastName } ) {
    return firstName + lastName;
}

fullName( person );
```

`ESnext` will have rest/spread operators for objects, currently in [stage-3](https://github.com/sebmarkbage/ecmascript-rest-spread)

**Questions**
* Who studied LISP in college?