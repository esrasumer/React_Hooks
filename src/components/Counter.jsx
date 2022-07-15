import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(5);
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>increase</button>
            <button onClick={() => setCounter(counter + 1)}>decrease</button>
            <hr />
            <br></br>
        </>
        
    )
}