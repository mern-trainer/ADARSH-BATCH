// var, let, const
var e;
// var a = 100; // number
// console.log(a)   
// var a = "Hello" // string
// console.log(a)   

// re declare, re assign

// camel case -> firstName
// letter, _, $, 

let d;
let b = 10;
console.log(b)
b = "Hello";
console.log(b)

// only re-assign

const pi = 3.14

console.log(pi)

// functions

function display(value) { // parameter
    console.log(value)
}

display(10) // arguments

function sum(a, b) {
    const result = a + b
    return result
}

// console.log(a)

let res = sum(10, 20);
console.log(res)

res = sum(100, 20)

console.log(res)

// Loop

// for loop, while, do while 

// conditional statement

// if, if else, if else if else, switch

// operators -> Arithmatic, logic, comparison

// +, -, *, /, %, =, !, ||, && , < , > , <=, >=, ==, !=

let v1 = 10
v2 = 20

if (v1 > v2) {
    console.log(true)
} else {
    console.log(false)
}

// var a = 10

// var username = "hello"

// // username. 

// var username = 10

// username

const val1 = 1000
const val2 = 200
const val3 = 30

if (val1 > val2 && val1 > val3) {
    console.log(val1)
} else if (val2 > val3) {
    console.log(val2)
} else {
    console.log(val3)
}

// switch

const num = 1

switch (num) {
    case 1:
        console.log("first")
        break;
    case 2:
        console.log("second")
        break;
    case 3:
        console.log("Third")
        break;
    default:
        console.log("Invalid input")
}

const number = 10

function isEven(n) {
    switch (n % 2) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return undefined;
    }
}

console.log(isEven(7))