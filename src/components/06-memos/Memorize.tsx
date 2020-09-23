import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import './style.css'

export const Memorize = () => {
    const {state, increment} = useCounter (10)
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Counter:  <Small value={state} /> </h1>
            <hr/>

            <button
                className='form-control btn btn-primary'
                onClick= {()=> increment ()}
            >
                +1
            </button>
            <button
                className='btn btn-outline-primary form-control mt-5'
                onClick={()=> setShow(!show)}
            >
                Show / Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
