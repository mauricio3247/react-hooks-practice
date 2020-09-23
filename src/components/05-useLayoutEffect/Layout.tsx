import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './style.css'
export const Layout = () => {
    const {state: stateCounter, increment} = useCounter(1)
    const {loading, data} = useFetch('https://www.breakingbadapi.com/api/quotes/' + stateCounter)
    const {quote} = (!!data && !!data[0]) && data[0]

    const pargraphRef = useRef<HTMLParagraphElement>(null)

    useLayoutEffect (()=> {
        console.log(pargraphRef.current?.getBoundingClientRect())
    }, [quote])
    return (
        <>
            <h1>Layout Breaking Bad...</h1>
            <hr/>
            <div className='text-center form-group'>
                <button 
                    disabled={loading}
                    onClick={()=>increment()}
                    className='btn btn-primary '>
                    Siguiente Frase
                </button>
            </div>

            <div>
                <blockquote className='blockquote text-right'>
                    <p
                    ref={pargraphRef} 
                    className='mb-0'>{quote}</p>
                </blockquote>
            </div>

                    
       




        </>
    )
}
