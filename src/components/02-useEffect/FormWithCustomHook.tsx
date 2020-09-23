import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

type  FormItems = {
    name: string,
    email: string,
    password: string
}

export const FormWithCustomHook = () =>  {

    const [formValues, handleInputChange] = useForm<FormItems>({
        name: '',
        email: '',
        password: ''
    })
    const {name, email, password} = formValues

    const handleSubmit = (event:any)=> {
        event.preventDefault();
        console.log(formValues)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Form with custom hook</h1>
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

            <div className='form-group'>
                <input 
                className='form-control'
                placeholder='*******'
                autoComplete='off'
                value = {password}
                name='password'
                onChange= {handleInputChange}
                type="password"/>
            </div>

            <button type='submit' className='btn btn-primary'>Send</button>

        </form>
    )
}