import { useState, useEffect } from "react"

export function Hook(){

    // antes del retorno configuramos nuestras variables de estado
    const [contador,setContador]= useState(0)

    // programando el detector de ejecuciones
    useEffect(function(){
        setContador(contador+1)

    },[])

    // funcion para decir que le den clikck al boton
    function incrementarCuenta(){
        setContador(contador+1)
    }

    function dismiunuyeCuneta(){
        setContador(contador-1)
    }

   
    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h2>la cuenta va en: {contador}</h2>
                    <button type="button" className="btn btn-primary mx-auto d-block" onClick={incrementarCuenta}>suma</button>
                    <button type="button" className="btn btn-primary mx-auto d-block" onClick={dismiunuyeCuneta}>resta</button>



                </div>
            </div>
        </div>
        </>
    )
}