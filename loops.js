// Loops

// for, while, do while

// let a = 10

// ++, --
// a++ // post increment
// a++
// a++
// a++
// ++a // pre increment

// const b = a--

// console.log(b, a)

// console.log(a)

for (let i = 0; i < 10; i++){
    if (i == 5) {
        continue;
    }
    console.log(i)
}

console.log("first")

// while
let j = 0;

while (j < 10) { // entry controlled loop
    if (j == 7) {
        j++
        continue;
    }
    console.log(j)
    j++   
}

// do while
let k = 0
do {
    if (k == 6) {
        break
    }
    console.log(k);
    k++
} while (k < 0); // exit controlled loop

// string -> collection of char.
// array -> collection of elements

const str1 = "hello"
const str2 = "world"

console.log(str1 + " " + str2)

console.log(`${str1} ${str2}`)

const arr = [1, 2, 3, 4, 5];

// string and array

const text = "Hello World!"

console.log(text.length)
console.log(text.charAt(5))
console.log(text[0])
console.log(text.includes("H"))
console.log(text.indexOf("World"))
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.slice(0, -3))

console.log(text.split("").reverse().join(""))

const array = [1, 2, 3, 4, 5, 6];

console.log(array.length)
console.log(array.at(4))
console.log(array[4])
console.log(array.indexOf(30))

// add, remove

array.push(10, 11, 12, 13, 14) // stack
array.pop()

array.unshift(-3, -2, -1, 0) // queue
array.shift()

// splice

array.splice(2, 1, 10, 20)

console.log(array)

// ------------------------------------------------------------------------------

// prime, palindrome, sum of number, factorial

// 153

function checkPalindrome(num) {
    let temp = num
    let rev = 0
    while (temp > 0) {
        const rem = temp % 10 // 1
        rev = rev * 10 + rem // 121
        temp = parseInt(temp / 10) // 0
    }
    console.log(num, rev)
    return num == rev
}

console.log(checkPalindrome(123))

// 121 -> 121 % 10 -> 1 -> parseInt(121 / 10) -> 12 ->
// 12 -> 12 % 10 -> 2 ->  1
// 1 -> 1 % 10 -> 1 -> 1/10 -> 0