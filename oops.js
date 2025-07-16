// OOPS -> Object Oriented programming system

// const obj = {
//     name: "Hello",
//     getName: function () {
//         return obj.name
//     }
// }

// console.log(obj.getName())

// class -> Template or blueprint of an object.
// object -> Instance of a class

// constructor function
// properties
// methods
// this -> represent current object -> global object
// Pascal Case -> FirstName

class Person{

    #number
    
    constructor(num) {
        this.#number = num
    }

    display() {
        return this.#number
    }


}

const obj = new Person(2000) // -> new -> Memory allocation
const obj2 = new Person(3000) // -> new -> Memory allocation

const res = obj.display()

console.log(res)

console.log(obj2.display())

// 4 pillers

// Inheritance, encapsulation, poly, abstr.

// Encap -> Binding of methods and properties into a single unit, access modifiers
// abstr -> Hinding of implementation

// inh -> Extends properties and methods from parent to child
// poly -> multiple forms
// -> overloading -> same method diff. para.
// -> overriding -> same method, same para.
    
class Vehicle{
    constructor(name) {
        this.name = name
    }
    display() {
        console.log(this.name)
    }
}

class Bike extends Vehicle{

}

const bike = new Bike("sdkjh")

bike.display()

// ---------------------------------- poly

class Calculator{
    sum(a, b) {
        return a + b
    }

    sub(a, b) {
        return a - b
    }
}

class Add extends Calculator{
    // overloading
    sum(a, b, c) {
        const res = super.sum(a, b)
        console.log(res)
        return a + b + c
    }
}

class Sub extends Calculator{
    // overriding
    sub(a, b) {
        console.log(super.sub(a, b))
        return b - a
    }
}

// const s = new Add()

// const sum = s.sum(10, 20, 30)

// console.log(sum)

const s = new Sub()

console.log(s.sub(10, 20))

// todo list

// this.array = []
// setTodo(task)
// getTodo(index)

class Todo{
    constructor() {
        this.todo = []
    }

    set(task) {
        this.todo.push(task)
    }

    get(idx) {
        return this.todo[idx]
    }

    delete(idx) {
        this.todo.splice(idx, 1)
    }

    update(idx, task) {
        this.todo[idx] = task
    }
}

const task = new Todo()

task.set("task 1")
task.set("task 2")
task.set("task 3")

// task.delete(2)

console.log(task)

console.log(task.get(2))

