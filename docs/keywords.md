
# Important JavaScript Keywords

## 1. `let` and `const`

Used for variable declaration.

```javascript
// let: for variables that can be reassigned
let count = 0;
count = 1; // Valid

// const: for variables that cannot be reassigned
const PI = 3.14159;
PI = 3; // Error
```

## 2. `var`

Older way to declare variables. Function-scoped or globally-scoped.

```javascript
var x = 10;
if (true) {
    var x = 20; // Same variable
}
console.log(x); // 20
```

## 3. `function`

Declares a function.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
```

## 4. `return`

Specifies the value to be returned from a function.

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
```

## 5. `if`, `else if`, `else`

Used for conditional execution.

```javascript
let age = 18;
if (age < 18) {
    console.log("Minor");
} else if (age === 18) {
    console.log("Just turned adult");
} else {
    console.log("Adult");
}
```

## 6. `switch`

Used for multiple conditional branches.

```javascript
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Another day");
}
```

## 7. `for`

Creates a loop.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## 8. `while`

Creates a loop that executes while a condition is true.

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## 9. `try`, `catch`, `finally`

Used for exception handling.

```javascript
try {
    // Code that may throw an error
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("This always runs");
}
```

## 10. `class`

Defines a class (introduced in ES6).

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person = new Person("Bob");
person.sayHello(); // "Hello, my name is Bob"
```

## 11. `import` and `export`

Used for working with modules (ES6+).

```javascript
// In math.js
export function add(a, b) {
    return a + b;
}

// In main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

## 12. `async` and `await`

Used for working with asynchronous functions (ES8+).

```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();
```
