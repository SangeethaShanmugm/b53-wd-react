import React, { useRef } from 'react'

function Ref() {
    const inputRef = useRef()
    const count = useRef(0)

    const handleSubmit = () => {
        console.log(inputRef.current.value)
    }
    const handleInputChange = () => {
        console.log(inputRef.current.value)
    }

    const handleClick = () => {
        count.current += 1
        console.log("count",count.current )
    }
    return (
        <div>
            <h1>Ref Example</h1>
            <input type="text" ref={inputRef} onChange={handleInputChange} />
            <button onClick={handleSubmit}>GetValue</button>

            <p>Count: {count.current}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Ref