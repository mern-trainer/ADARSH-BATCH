const ComponentA = ({ value, age, num, getDataFromChild }) => {

    const data = "This is data";

    return <div>
        <h2>Component A : {value}</h2>
        <p>AGE: {age}</p>
        <p>Num: {num}</p>
        <button onClick={() => getDataFromChild(data)}>Send Data To Parent</button>
    </div>
}

export default ComponentA
