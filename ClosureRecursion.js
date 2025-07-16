// Closure -> A function that returns a function.
// Child function can access the variables of parent function.

const parentFunc = () => {
    let count = 0;
    const childFunc = () => {
        count++
        return count
    }
    return childFunc
}

const func = parentFunc()

// console.log(func())
// console.log(func())
// console.log(func())

const counter = () => {
    let value = 0;
    const increment = () => {
        value++
        return value
    }
    const reset = () => {
        value = 0
        return value
    }
    const decrement = () => {
        value--
        return value
    }
    return { increment, reset, decrement }
}

const resFunc = counter()

console.log(resFunc.increment())
console.log(resFunc.increment())
console.log(resFunc.increment())
console.log(resFunc.increment())
console.log(resFunc.increment())
console.log(resFunc.increment())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.decrement())
console.log(resFunc.reset())
console.log(resFunc.increment())
console.log(resFunc.increment())
console.log(resFunc.increment())

// recursion -> function calling itself, with in the body of the function.

let i = 0

const sampleFunc = () => {
    if (i == 10) {
        return;
    }
    console.log(i)
    i++
    return sampleFunc()
}

sampleFunc()

// call stack -> FILO, LIFO

const getCount = (n) => {
    if (n <= 0) {
        return "hello";
    }
    return getCount(n - 1)
}

console.log(getCount(4))

// getCount(4) -> return "hello"
// getCount(3) -> return "hello"
// getCount(2) -> return "hello"
// getCount(1) -> return "hello"
// getCount(0) -> return "hello"

// sum of n numbers

const sum = (n) => {
    if (n == 1) {
        return n
    }
    return n + sum(n - 1)
}

// sum(4) => 10
// sum(3) => 6
// sum(2) => 3
// sum(1) => return 1

console.log(sum(5))

const fact = (n) => {
    if (n == 1) {
        return 1
    }
    return n * fact(n - 1);
}

// palindrome

const palindrome = (number, temp = number, rev = 0) => {
    if (temp <= 0) {
        return rev == number
    }
    return palindrome(number, parseInt(temp/10), rev * 10 + (temp % 10))
}

console.log(palindrome(121))