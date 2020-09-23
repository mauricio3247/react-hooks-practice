import React, { memo } from 'react'
/**
 * Cuando tenemos un componente que no queremos que sea renderizado
 * cada vez que un componente padre cambia
 * entonces usamos memo, asi este componente solo se renderizara
 * cuando sus propiedades cambien 
 * es importante usarlo para aquellas apps donde se ejecutan 
 * peticiones http y cargas de multiples nodos hijos que no requieren
 * que si un pequeño cambio del padre pueda recargar un hilo de componentes hijos
 * quer realmente no requerian verse afectados por el cambio del padre
 * 
 */
export const Small = memo(({value}: {value:number}) => {
    console.log('Me volvi a llamar :(')
    return (
        <>
            <small>{value}</small>
        </>
    )
})
