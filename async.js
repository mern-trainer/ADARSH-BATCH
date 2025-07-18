// Sync, async

// sync -> single thread -> line by line execution
// async -> multi thread -> parallel execution

// async -> callback

// sync -> blocking
// async -> non-blocking

// setInterval(() => {
//     console.log("Hello World");
// }, 2000) // 2 seconds == 2000 ms


// setTimeout(() => {
//     console.log("Display after 5 seconds");
// }, 5000) // 5 seconds

// console.log("Hello World last one")

//  promise -> a way to handle asynchronous operations

// states -> pending, fulfilled, rejected

const p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Resolved after 5 seconds")
        }, 5000);
    })
}

// p().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Finally");
// })

// console.log("Hello World");


// const a = 10

// const b = () => {
//     return 10
// }

// console.log(a);
// console.log(b());

// async await -> wait for a promise to resolve

const handleAsync = async () => {
    try {
        const res = await p()
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Finally");
    }
}

// async function sample() {
    
// }

handleAsync()



// application

// fetch -> http request

// json

const obj = '{"name": "John", "age": 30}'


const getDataFromURL = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()
        const products = data.products
        const titles = products.map((pdts) => pdts.title)
        const root = document.getElementById("root")
        titles.forEach((title) => {
            root.innerHTML += `<div>${title}</div>`
        })
    } catch (err) {
        console.log(err);
    }
}

getDataFromURL()


