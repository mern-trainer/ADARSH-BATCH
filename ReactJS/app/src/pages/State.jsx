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

    // const [counter, setCounter] = useState(0);

    // const handleUpdate = () => {
    //     setCounter(state => state + 1);
    // }

    // return <div>
    //     <h2>State</h2>
    //     <p>value: {counter}</p>
    //     <button onClick={handleUpdate}>Update</button>
    // </div>

    const [counters, setCounters] = useState({ one: 0, two: 0 });

    const IncrementOne = () => {
        setCounters({ ...counters, one: counters.one + 1 });
    }

    const IncrementTwo = () => {
        setCounters({ ...counters, two: counters.two + 1 });
    }

    return <div>
        <div>
            <p>Counter 1: {counters.one}</p>
            <div>
                <button onClick={IncrementOne}>Increment</button>
            </div>
        </div>
        <div>
            <p>Counter 2: {counters.two}</p>
            <div>
                <button onClick={IncrementTwo}>Increment</button>
            </div>
        </div>
    </div>
}

export default State