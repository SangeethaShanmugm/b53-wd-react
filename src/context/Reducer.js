import React, { useReducer } from 'react'

function Reducer() {
    // useReducer(()=>{}, {define state})
    // action to be dispatched
    const [state, dispatch] = useReducer(
        (state, action) => {
            console.log(state, action)
            // { name: "Mickenzie", btn: 1, password: "12345" } || { type: "update", value: "Peter" }
            //action Types
            if (action.type === "update") {
                return {
                    ...state,
                    name: action.value
                }
            }
            if (action.type === "counterInc") {
                return {
                    ...state,
                    btn: state.btn + 1
                }
            }
            if (action.type === "counterDec") {
                return {
                    ...state,
                    btn: state.btn - 1
                }
            }
            if (action.type === "pass") {
                return {
                    ...state,
                    password: action.value
                }
            }

        }, {
        name: "Mickenzie",
        btn: 1,
        password: "12345"
    })


    return (
        <div>
            <h1>Reducer</h1>
            <p>{state.name}</p>
            <p>{state.password}</p>
            <p>{state.btn}</p>
            {/* password   */}
            <input type="text" onChange={(e) => dispatch({ type: "pass", value: e.target.value })} />
            {/* name */}
            <button onClick={() => dispatch({ type: "update", value: "Mick" })}>GetValue</button>
            {/* counter */}
            <button onClick={() => dispatch({ type: "counterInc" })}>Increment</button>
            <button onClick={() => dispatch({ type: "counterDec" })}>Decrement</button>
        </div>
    )
}

export default Reducer