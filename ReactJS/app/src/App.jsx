import { BrowserRouter, Routes, Route } from "react-router"
import Mapping from "./pages/Mapping"
import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/react-mapping" Component={Mapping} />
            <Route path="/landing" Component={LandingPage} />
            <Route path="/about" Component={AboutPage} />
        </Routes>
    </BrowserRouter>
}

export default App