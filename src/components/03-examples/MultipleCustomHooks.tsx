import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './style.css'
export const MultipleCustomHooks = () => {
    const {state: stateCounter, increment} = useCounter(1)
    const {loading, data} = useFetch('https://www.breakingbadapi.com/api/quotes/' + stateCounter)
    const {author, quote} = (!!data && !!data[0]) && data[0]
    return (
        <>
            <h1>Breaking Bad...</h1>
            <hr/>
            <div className='text-center form-group'>
                <button 
                    disabled={loading}
                    onClick={()=>increment()}
                    className='btn btn-primary '>
                    Siguiente Frase
                </button>
            </div>
            {
                loading 
                ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <div>

                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'>{quote}</p>
                            <footer className='blockquote-footer' >{author}</footer>
                        </blockquote>

                    </div>

                    
                )
            }





        </>
    )
}
