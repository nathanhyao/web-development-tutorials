// log a statement using console.log()
console.log("Hello from main.js");

// Variables and constants

let age = 20;
console.log(age);

const salary = 80_000;
console.log(salary);

// Primitive data types
const name = 'Nathan'
const language = "Javascript"
const channel = `YouTube Channel`

const total = 0
const PI = 3.14

const isPrimaryNumber = true
const isNewUser = false

let result // undefined type (not yet defined)
let result2 = undefined;
console.log(result)

const res = null // empty (unknown)

// BigInt type (more memory for a number)
// Symbol type (unique and unchangeable number)

// Non-primitive data types

// Object literal type
const person = {
    'firstName': 'Bruce',
    lastName: 'Wayne',
    'age': 30
}
console.log(person.firstName)

// Array type
const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[0], oddNumbers[1])

let a = 10 // data types auto converted
a = "some string"
a = true
console.log(a)

// Operators

// Assignment (=)
// Arithmetic (+, -, %, etc)
// ++ and -- available (unlike python)
// Comparison (==, !=, ===, !===, >, ...)

let x = 10
let y = 5

// ===, !== compares value AND data type
console.log(x === y) // false

// Logical (&&, ||, !)
// Joining strings
console.log('Bruce ' + 'Wayne')

// Ternary
const isEven = 10 % 2 === 0 ? true : false

// Type conversion

// Implicit
console.log("string" + true) // stringtrue
console.log('4' - '2') // 2 (also * and /)
console.log('5' - true) // 4
console.log('5' - false) // 5
console.log(5 + undefined) // NaN

// Explicit
console.log(Number('5')) // 5
console.log(Number(false)) // 0
console.log(Number('')) // 0

console.log(parseInt('5')) // 5
console.log(parseFloat('3.14')) // 3.14

console.log(String(500)) // '500'
console.log(String(true)) // 'true'
console.log((500).toString()) // 500
console.log(Boolean(10)) // true
console.log(Boolean(NaN))
// Boolean() on null, undefined, 0, '', NaN = false

// Equality

// Coercion
const var1 = 10
const var2 = '10'

console.log(var1 == var2) // true
console.log(var1 === var2) // false (ensures type)
// safe to use === to check equality (e.g., '' == 0 is true)

// Conditional statements

// if, else, else if
const num = 5

if (num > 0) {
    console.log('Number is positive')
} else if (num < 0) {
    console.log('Number is negative')
} else {
    console.log('Number is zero')
}

// Switch
const color = 'red'

switch (color) {
    case 'red':
        console.log('Color is red')
        break
    case 'blue':
        console.log('Color is blue')
        break
    case 'green':
        console.log('Color is green')
        break
    default:
        console.log('Color is not red, blue, or green')
        break
}

// Looping

// For
for (let i = 1; i <= 5; i++) {
    console.log('For loop iteration #' + i)
}

// While
let i = 1
while (i <= 5) {
    console.log('While loop iteration #' + i++)
}

// Do while (1:04:00)
let j = 1
do {
    console.log('Do-while loop iteration #' + j++)
} while (j <= 5)

// For ... of
const numArray = [1, 2, 3, 4, 5]
for (const num of numArray) {
    console.log('For ... of loop iteration #' + num)
}

// Functions

function greet(username) {
    console.log('Good morning ' + username)
}
greet('Bruce')
greet('Clark')
greet('Diana')

function add(a, b) {
    return a + b
}
console.log(add('hello', ' there'))
console.log("5 + 10 = " + add(5, 10))

// Arrow functions
const arrowSum = (a, b) => a + b // implicit return, same line
console.log('Arrow functions: ' + arrowSum('hello', ' there')) // same output
console.log('Arrow functions: 5 + 10 = ' + arrowSum(5, 10))

const addFive = num => num + 5 // one argument, optional parentheses
console.log("Arrow functions: 5 + 5 = " + addFive(5))

// Scope

// Block scope
// Function scope
// Global scope (doesn't overwrite block/function scope)