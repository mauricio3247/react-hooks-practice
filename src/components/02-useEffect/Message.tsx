import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCords] = useState({x:0, y:0})
    const {x, y} = cords
    useEffect(() => {
        const mouseMove = (e:any)=>{
            const cords = {x: e.x, y: e.y}
            setCords(cords)
        }
        
        window.addEventListener('mousemove', mouseMove)
        return () => {
            console.log('Componente desmontado')
            //cuando se trabaja con useEffect es importante considerar
            //remover listeners y otros items para que no queden haciendo
            //cosas en segundo plano
            //esta funcion lo hace como un evento unMount
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    return (
        <div>
            <h3>Eres genial</h3>
            <p> x: {x}, y: {y} </p>
        </div>
    )
}
