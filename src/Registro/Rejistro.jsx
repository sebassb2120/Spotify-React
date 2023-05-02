import "./Registro.css"
export function Registro(){
    return(
        <>
        <div className="contenedor">
            <div className="card2">
                <div className="inputbox">
                    <h3 className="m-5">SING UP</h3>
                    <div className="inputbox"></div>
                    <input type="text" required="required" />
                    <span>Username</span>
                </div>
            

                <div className="inputbox">
                    <input type="password" required="required" />
                    <span>Password</span>
                </div>


                <button className="boton">Enter</button>
                <button className="boton21"><a href="../Formulario/Formulario"></a>Realiza el Formulario</button>
            </div>

        </div>
      
        </>
    )
}