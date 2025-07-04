// DOM -> Document Object Model
// DOM is a programming interface for web documents to create and modify their content, structure, and style.

// Methods

// write, writeln
// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()

// createElement()
// appendChild()

// Properties

// innerHTML
// innerText
// textContent
// value

// document.write("Hello World asdfadf") 
// document.writeln("sdfsdf")

let element = document.getElementById("demo_1")

console.log(element.innerHTML);

element.innerHTML = "<b>Hello</b>"

const style = element.style

style.color = "red"
style.background = "black"
style.padding = "20px"
style.fontSize = "30px"

// ---------------------------------------------

let elements = document.getElementsByClassName("demo")

console.log(elements);

console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2]);

const arr = ["first data", "second data", "third data"]

for (let i = 0; i < elements.length; i++){
    elements[i].innerHTML = arr[i]
    elements[i].style.color = "red"
}

// -----------------------------------------------------------------------------

elements = document.getElementsByTagName("div")

console.log(elements);

// Repeat getElementsByClassName methods and props.

// -----------------------------------------------------------------------------

element = document.querySelector("div")

// Repeat getElementById methods and props.

// -----------------------------------------------------------------------------

elements = document.querySelectorAll("div")

// Reapeat getElementsByClassName methods and props.


// value

const user = document.getElementById("user")

console.log(user.value);

// Applications

function handleClick() {
    console.log(user.value);
}

// -----------------------------------------------------------------------------




