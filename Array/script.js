// Arrow Function

// variable

// loop ->

// arrow function

// const a = function func() { console.log("Hi") }

function func(a) {
    return a
}

const funcName = (a) => a * 10

const res = funcName(100)

console.log(res)

// callback function -> A function which is passed as an argument to another function.

const display = (name) => {
    console.log(name)
}

const displayName = (name, cb) => {
    cb(name)
}

displayName("John", display)

// ----------------------------------------------------------

// const forEach = (arr, callbackFunc) => {
//     for (let i = 0; i < arr.length; i++){
//         const num = arr[i]
//         callbackFunc(num, i, arr)
//     }
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]

// forEach(nums, (element, index, array) => {
//     console.log(element, index, array)
// })

// array forEach

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

// nums.forEach((element, index, array) => {
//     console.log(element, index, array)
// })

// array forEach

// for of, for in

// for (const num of nums) {
    
// }

nums.forEach((element, index, array) => {
    console.log(element, index, array)
})

// array filter

const res1 = nums.filter((number) => number % 2 == 0)
// nums.filter(a => a % 2)

console.log(res1)

// array map

const res2 = nums.map((number) => {
    if (number % 2 == 0) {
        return number + 100
    }
    return number
})

console.log(res2)

// array reduce

const res3 = nums.reduce((prev, number) => {
    return prev + number // 15
}, 0)

console.log(res3)


const employees = [
    { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
    { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
    { name: "Charlie", age: 35, salary: 65000, department: "Engineering" },
    { name: "David", age: 50, salary: 90000, department: "Management" },
    { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
    { name: "Frank", age: 40, salary: 75000, department: "Finance" },
    { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac", age: 38, salary: 68000, department: "HR" },
    { name: "Jack", age: 42, salary: 72000, department: "Finance" },
    { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leo", age: 33, salary: 58000, department: "HR" },
    { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nina", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver", age: 36, salary: 73000, department: "Management" }
];

const namesArray = employees.map(emp => emp.name.toUpperCase())

const filteredNames = namesArray.filter(name => name)

console.log(filteredNames)

const sumOfSalary = employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0)

console.log(sumOfSalary / employees.length)
