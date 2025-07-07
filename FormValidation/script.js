const error = document.getElementsByClassName("error")

function handleClearForm() {
    for (let i = 0; i < error.length; i++){
        error[i].innerHTML = "";
    }
}

function handleSubmit() {
    
    // const name = document.getElementById("name").value;
    // const username = document.getElementById("username").value;
    // const email = document.getElementById("email").value;
    // const number = document.getElementById("number").value;
    // const password = document.getElementById("password").value;
    // const confirmPassword = document.getElementById("confirm_password").value;

    const name = document.reg.name.value.trim()
    const username = document.reg.username.value.trim()
    const email = document.reg.email.value.trim()
    const number = document.reg.number.value.trim()
    const password = document.reg.password.value.trim()
    const confirmPassword = document.reg.confirm_password.value.trim()

    console.log(name)

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/

    if (name == "") {
        error[0].innerHTML = "Name is required"
        return false;
    }

    if (name.length < 4 || name.length > 16) {
        error[0].innerHTML = "Name must be between 4 and 16 characters"
        return false;
    }

    if (username == "") {
        error[1].innerHTML = "Username is required"
        return false;
    }

    if(username.length < 4 || username.length > 16) {
        error[1].innerHTML = "Username must be between 4 and 16 characters"
        return false;
    }

    if (email != "") {
        error[2].innerHTML = "Email is required"
        return false;
    }

    if (!emailRegex.test(email)) {
        error[2].innerHTML = "Email is not valid"
        return false;
    }

    if (number == "") {
        error[3].innerHTML = "Number is required"
        return false;
    }

    if (number.length != 10) {
        error[3].innerHTML = "Number must be 10 digits"
        return false;
    }

    if (password == "") {
        error[4].innerHTML = "Password is required"
        return false;
    }

    if (!passwordRegex.test(password)) {
        error[4].innerHTML = "Password must be between 8 and 20 characters, contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
        return false;
    }

    if(confirmPassword == "") {
        error[5].innerHTML = "Confirm password is required"
        return false;
    }

    if(password != confirmPassword) {
        error[5].innerHTML = "Passwords do not match"
        return false;
    }

    alert("Form Submitted")

    return false;
}