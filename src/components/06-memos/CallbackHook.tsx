import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'
import './style.css'
/**
 * cuando los parametros enviando son funciones u objetos que 
 * pueden cambiar su referencia el uso de memo para evitar el 
 * renderizado de un componente hijo no funcionara correctamente
 * en lugar de eso se usa callback
 */
export const CallbackHook = () => {
    const [counter, setCounter] = useState (10)

    /*const increment  = () => {
        setCounter (counter +1)
    }*/

    const increment = useCallback( (num: number) => {
        setCounter ((state) => state + num)
    }, [setCounter])
    return (
        <div>
            <h1>Callback Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment= {increment}></ShowIncrement>
        </div>
    )
}
