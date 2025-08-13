import { BrowserRouter, Routes, Route } from "react-router"
import Mapping from "./pages/Mapping"
import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"
import State from "./pages/State"
import TodoList from "./pages/TodoList"
import PageA from "./pages/PageA"
import ProductsListPage from "./pages/ProductsListPage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/react-mapping" Component={Mapping} />
            <Route path="/landing" Component={LandingPage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/state" Component={State} />
            <Route path="/todo" Component={TodoList} />
            <Route path="/page-a" Component={PageA} />
            <Route path="/products" Component={ProductsListPage} />
        </Routes>
    </BrowserRouter>
}

export default App