#Pure Functions

A pure function is a function where the return value is only determined by its input values, without observable **side effects**.

If a function changes the state of the program - writes to a file, prints to console or
mutates a variable outside its scope - that is called a side-effect.

*Pure function*
```javascript
const sum = ( a, b ) => a + b;
```

*Impure function (depends on outer scope)*
```javascript
const a = 42;
const sum = ( b ) => a + b;
```

*Impure function (produces side-effect)*
```javascript
const sum = 0;
const sum = ( a, b ) => { sum = a + b };
```

Side-effects are bad because they are:
  - hard to test
  - hard to debug
  - hidden at first sight

Side-effects should be isolated as much as possible.

**Questions**
* Can you have only pure functions?
* What is a closure?