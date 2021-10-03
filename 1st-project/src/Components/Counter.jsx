import React, { useState } from "react";
import { MyButton } from "./UI/MyButton/MyButton";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div>{counter}</div>
            <MyButton onClick={decrement}>decrement</MyButton>
            <MyButton onClick={increment}>increment</MyButton>
        </>
    );
}

export default Counter