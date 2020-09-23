import React, { useMemo, useState } from 'react'
import { procesadoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

import './style.css'

export const MemoHook = () => {
    const {state:counter, increment, decrement} = useCounter (5000)
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesadoPesado (counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:  <small> {counter} </small> </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button
                className='form-control btn btn-primary'
                onClick= {()=> increment ()}
            >
                +1
            </button>

            <button
                className='form-control btn btn-primary mt-5'
                onClick= {()=> decrement ()}
            >
                -1
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
