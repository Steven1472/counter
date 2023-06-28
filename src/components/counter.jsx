import { useState } from "react";

const Counter = () => {
    const[count, setCount] = useState(0)

    const countHandler = () => {
        setCount(count + 1)
     };
     const decrement = () => {
        setCount(count - 1)
     };
     const reset = () => {
        setCount(0)
     };
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={countHandler}> Add </button>
            <button onClick={decrement}> Subtract </button>
            <button onClick={reset}> Reset </button>

        </div>
    )
};

export default Counter;