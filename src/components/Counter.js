import React, { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1);
    }

    return(

        <div>
            <p>Button clicked {count} times</p>
            <button onClick={incCount}>Click me</button>
        </div>
    )
}

export default Counter;