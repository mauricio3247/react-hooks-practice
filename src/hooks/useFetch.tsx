import { useEffect, useState } from "react"


export const useFetch = (url:string) => {
    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect (()=> {
        setstate({loading:true, data: null, error: null})
        fetch (url)
            .then(resp=> resp.json())
            .then(data=> {
                return setstate({loading:false, data, error: null})
            })
    },[url])

    return state as any;
}