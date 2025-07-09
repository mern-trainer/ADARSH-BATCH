
// for

// for (let i = 0; i < arr.length; i++){
    //     console.log(i)
    // }
    
    // forEach
    
    
    function sum(a, b) {
        return a + b
    }
    
    // arrow function
    
const sumOfNumbers = (a, b) => a + b

console.log(sumOfNumbers(10,20))

// callback function -> function that is passed as an argument to another function.

const display = () => {
    console.log("Callback function called")    
}

const anotherFunc = (cb) => {
    cb()
}

const num = 10

anotherFunc(display)

// ---------------------------------------------------

function sumOfNNumbers(n, callback) {
    let s = 0
    for (let i = 1; i <= n; i++){
        s += i
        callback(s, 10, 20)
    }
    return s
}

function displaySum(s, num, n2){
    console.log(s, num, n2)
}

console.log(sumOfNNumbers(10, displaySum))

// ---------------------------------------------------

// forEach, filter, map, reduce

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach

arr.forEach((element) => {
    console.log(element)
})

// filter

const filteredArray = arr.filter((element) => element % 2 == 1)

console.log(filteredArray)

// map -> array manipulation

const mappedArray = arr.map((element) => {
    if (element % 2 == 0) {
        return element * 10
    }
    return element
})

console.log(mappedArray)

// reduce -> reduce the array to a single value.

const value = arr.reduce((previousValue, element) => {
    return previousValue + element // 10
}, 0)

console.log(value)

const obj = {
    name: "John",
    age: 20,
    email: "abc@example.com"
}

const users = [{
    name: "John",
    age: 20,
    email: "abc@example.com"
},{
    name: "Jane",
    age: 21,
    email: "jane@example.com"
},{
    name: "Jack",
    age: 22,
    email: "jack@example.com"
}]

const filteredUsers = users.filter((user) => user.age >= 21)
console.log(filteredUsers)

const mappedUsers = users.map((user) => {
    if (user.age == 22) {
        user.age = 100
    }
    return user
})

console.log(mappedUsers)

const reducedAge = users.reduce((prev, user) => prev + user.age, 0)

console.log(reducedAge)