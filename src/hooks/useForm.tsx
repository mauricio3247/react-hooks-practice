import { useState } from "react"

export const useForm =  < T extends {} >(initialState:T):[T, any] => {
    const [values, setValues ] = useState (initialState)
    const handleInputChange = (event:any)=> {
        const {value, name} = event.target
        setValues({...values, 
            [name]: value
        })
    }

    return [values, handleInputChange]
}