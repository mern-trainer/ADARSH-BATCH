import AboutPage from "./pages/AboutPage"
import LandingPage from "./pages/LandingPage"
import { Fragment } from "react"



const App = () => {

    const age = 20;

    const handleClick = (n) => {
        console.log(n)
    }

    return <Fragment>
        <AboutPage />
        <LandingPage />
        <p>Age is {age}</p>
        <button onClick={() => {
            handleClick(10)
        }}>Click</button>
    </Fragment>
}

export default App // default export