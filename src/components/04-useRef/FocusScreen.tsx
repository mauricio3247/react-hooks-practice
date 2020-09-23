import React, { useRef } from 'react'
import './style.css'
export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    //console.log(ref)
    const handleClick = () => {
        inputRef.current?.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input 
            ref ={inputRef}
            className='form-control'
            placeholder='Su nombre'
            type="text"/>
            <button 
            onClick= {handleClick}
            className='btn btn-outline-primary mt-5'>
                Focus
            </button>
        </div>
    )
}
