import React, { useState } from 'react'


// stateless => functional comp


function StateLess() {
    const [count, setCount] = useState(0)

    const IncrementCount = () => {
        setCount(count + 1)
    }
    return (
        <div>StateLess - Function Comp
            <p>Count: {count}</p>
            <button onClick={IncrementCount}>Increment Count</button>
        </div>
    )
}

export default StateLess