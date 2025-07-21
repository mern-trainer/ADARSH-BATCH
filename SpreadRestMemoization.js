// spread operator -> copy objects or arrays
// rest operator -> get rest array elements or object properties
// memoization -> An optimization technique that stores the results of expensive operations and returns the cached result when the same input is encountered again.

// destructure -> extract values from an array or object

const arr = [1, 2, 3];

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

const [a, b, c] = arr

console.log(a, b, c)

const obj = {
    name: "John",
    age: 20,
    city: "New York"
}

// const name = obj.name
// const age = obj.age
// const city = obj.city

const { name, age, city } = obj

console.log(name, age, city)

// spread

const array = [1, 2, 3, 4, 5, 6, 7];

const newArray = [...array] // pass by value

// console.log(newArray)

newArray.push(8)

console.log(array)
console.log(newArray)

const object = {
    name: "John",
    age: 20,
    city: "New York",
    country: "USA"
}

const newObj = {...object}

newObj.country = "India"

console.log(object)
console.log(newObj)

// rest

const [d, e, f, ...remainingElements] = array

console.log(d, e, f)

console.log(remainingElements)

const { name: uname, age: uage, ...remainingProperties } = object

console.log(uname, uage)

console.log(remainingProperties)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

// memoization

// Set: SetConstructor -> store unique values

const set = new Set()

set.add(10)
set.add(20)
set.add(30)
set.add(100)

console.log(set.has(100))

console.log(set.size)

set.delete(100)

console.log(set)

set.clear()

// set to array <-> array to set

const arr4 = Array.from(set)

console.log(arr4)

const set2 = new Set(arr4);

console.log(set2)

// Map: MapConstructor -> store key-value pairs

const map = new Map()

map.set("name", "John")
map.set("age", 20)
map.set("city", "New York")
map.set("country", "USA")

// [["name", "John"], ["age", 20], ["city", "New York"]]

console.log(map.get("city"))

console.log(map.has("city"))

map.delete("age")

// map.clear()

console.log(map.size)

console.log(map)

// --------------------------------------------------------------------------------------

// const store = {name: "John"}

// console.log(store[field])

const cache = new Map()

const sum = (a, b) => {
    const field = `${a},${b}` // 1,2, 1,20
    // if (store[field]) {
    //     console.log("Getting from cache...")
    //     return store[field]
    // }
    if (cache.has(field)) { // true
        console.log("Getting from cache...")
        return cache.get(field) // 21
    }
    console.log("Calculating...")
    const s = a + b
    cache.set(field, s) // 1,20: 21
    // store[field] = s
    return s
}

console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 20));
console.log(sum(1, 20));

// ------------------------------------------------------------------------------
const store = new Map()

const fetchData = async (productId) => {
    try {
        if (store.has(productId)) {
            return store.get(productId)
        }
        console.log("Fetching data...");
        const response = await fetch(`https://dummyjson.com/products/${productId}`)
        const data = await response.json()
        store.set(productId, data)
        return data
    } catch (err) {
        return null;
    }
}

const handleCall = async () => {
    try {
        let res = await fetchData(10)
        console.log(res);
        res = await fetchData(10)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        res = await fetchData(20)
        console.log(res);
        console.log("Fetching completed")
    } catch (err) {
        return console.log(err)
    }
}

handleCall()