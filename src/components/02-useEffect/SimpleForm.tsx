import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'
export const SimpleForm = () =>  {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })
    const {name, email} = formState

    useEffect (()=> {
        //console.log('hey')
    },[])

    useEffect (()=> {
        //console.log('form State cambio')
    },[formState])

    useEffect (()=> {
        //console.log('email cambio')
    },[email])

    const handleInputChange = (event:any)=> {
        const {value, name} = event.target
        setformState({...formState, 
            [name]: value
        })
    }

    return ( 
        <>
            <h1>Use Effect</h1>
            <hr/>
            <div className='form-group'>
                <input 
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value = {name}
                name='name'
                onChange= {handleInputChange}
                type="text"/>
            </div>

            <div className='form-group'>
                <input 
                className='form-control'
                placeholder='Tu Email'
                autoComplete='off'
                value = {email}
                name='email'
                onChange= {handleInputChange}
                type="email"/>
            </div>

            { name === '123' && <Message />}
        </>
    )
}