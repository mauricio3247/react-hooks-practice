import { useEffect, useRef, useState } from "react"


export const useFetch = (url:string) => {
    const isMounted = useRef(true)

    useEffect(()=> {
        
        return () => {
            isMounted.current = false
        }
    },[])

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
                
                    
                setTimeout(()=> {
                    if(isMounted.current) {
                    setstate({loading:false, data, error: null})
                } else {
                    console.log('componente desmontado')
                }
                },4000)
                

                
            })
    },[url])

    return state as any;
}