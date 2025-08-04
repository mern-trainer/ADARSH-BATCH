// state management

import { useState } from "react"

// state -> Object that stores data inside component
// Hooks -> Functions that let you use state and other React features in functional components

// Life Cycle => Create -> Mount, update, unmount

// Mounting -> When component is added to the DOM
// Updating -> When component is re-rendered
// Unmounting -> When component is removed from the DOM

// variables

// useState();

const State = () => {

    const [counter, setCounter] = useState(0);

    const handleUpdate = () => {
        setCounter(state => state + 1);
    }

    return <div>
        <h2>State</h2>
        <p>value: {counter}</p>
        <button onClick={handleUpdate}>Update</button>
    </div>
}

export default State