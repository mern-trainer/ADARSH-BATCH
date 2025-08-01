import Header from "../components/Header"
import { Link } from "react-router"

const AboutPage = () => {
    return <div>
        <Header />
        About Page
        <Link to="/react-mapping">Mapping</Link>
    </div>
}

export default AboutPage