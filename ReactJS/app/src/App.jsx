// import { Fragment } from "react"

import LandingPage from "./pages/LandingPage"



// const App = () => {

//     const handleCreatePassword = () => {
//         const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
//         let password = "";
//         for (let i = 0; i < 16; i++){
//             const randomIndex = Math.floor(Math.random() * charList.length)
//             const randomChar = charList[randomIndex]
//             password += randomChar
//         }
//         document.getElementById("password").innerHTML = `<b>password: ${password}</b>`
//         document.getElementById("list").innerHTML += password + "<br/>"
//     }

//     return <Fragment>
//         <div id="password"></div>
//         <button onClick={handleCreatePassword}>Create Password</button>
//         <div id="list"></div>
//     </Fragment>
// }

// export default App;


const App = () => {
    return <LandingPage />
}

export default App