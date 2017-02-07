#Immutability

*The last thing you wanted any programmer to do is mess with internal state even if presented figuratively… It is unfortunate that much of what is called “object-oriented programming” today is simply old style programming with fancier constructs.*, Alan Kay - creator of Smalltalk.

There are no *variables*, everything is a *value*.

```javascript
const a = 42;
a = 23; // Error!
```

```javascript
let a = 42;
a = 23; // Works!
```

In functional programming everything is immutable by default.

If you need to use a mutable variable you have to rethink it.

Safer code with immutability - you can’t screw up what you can’t change.

Immutability is a huge advantage:
* in multi-threaded environments
* when working with complex data structures

JavaScript does not have immutable data structures by default.

*Constant assignment* vs *immutable*

```javascript
const a = 42;
```

```javascript
const obj = {
    number: 42
};

obj.number = 23; // works!
```

For immutable data structures, checkout `Object.freeze` or try [immutable.js](https://facebook.github.io/immutable-js/).

**Questions**
* When would i need Object.freeze?
* Are immutable data structures a performance issue?
* const vs let, which should I use?
