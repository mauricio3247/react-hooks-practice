import React, { useState } from 'react'
import './counter.css'
export const CounterApp = () => {
    const [{counter1, counter2}, setcounter] = useState({
        counter1: 10,
        counter2: 20
    })

    const handleIncrementCounter1 = () => {
        setcounter((state)=> ({...state, counter1: counter1+1}))
    }
    return (
        <>
            <h1>Counter App { counter1 }</h1>
            <h1>Counter App { counter2 }</h1>
            <hr/>
            <button 
            onClick={handleIncrementCounter1}
            className="btn btn-primary">+1</button>
        </>
    )
}