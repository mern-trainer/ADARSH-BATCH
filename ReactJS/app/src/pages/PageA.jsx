import { useState } from "react";
import ComponentA from "../components/ComponentA"

const PageA = () => { // parent comp

    const [num, setNum] = useState(0)

    const age = 20;

    const handleIncrement = () => setNum(num + 1);

    const getDataFromChild = (data) => {
        console.log(data)
    }

    return <div>
        <h1>Page A</h1>
        <button onClick={handleIncrement}>Inc</button>
        <ComponentA value="Hello" age={age} num={num} getDataFromChild={getDataFromChild} /> {/* child comp */}
        
    </div>
}

export default PageA