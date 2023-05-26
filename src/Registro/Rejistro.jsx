import "./Registro.css"
import { useState } from "react"
export function Registro(){

    const [nombre,setNombre]=useState("")

    const [contraseña, setContraseña]=useState("")
    return(
        <>
        <div className="contenedor">
            <div className="card2">
                <div className="inputbox">
                    <h3 className="m-5">SING UP</h3>
                    <div className="inputbox"></div>
                    <input 
                    type="text" 
                    required="required" 
                    id="nombre"
                    onChange={(evento)=>{
                        setNombre(evento.target.value)
                    }}
                    />
                    <span>Username</span>
                </div>
            

                <div className="inputbox">
                    <input 
                    type="password" 
                    required="required"
                    id="contraseña"
                    onChange={(evento)=>{
                        setContraseña(evento.target.value)
                    }}
                    />
                    <span>Password</span>
                </div>


                <button className="boton">Enter</button>
                <button className="boton21"><a href="../Formulario/Formulario"></a>Realiza el Formulario</button>
            </div>

        </div>
      
        </>
    )
}