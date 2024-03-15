import React, { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1);
    }

    return(

        <div>
            <h1>Button clicked {count} times</h1>
            <button onClick={incCount}>Click me</button>
        </div>
    )
}

export default Counter;