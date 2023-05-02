import "./Formulario.css"
export function Formulario(){

    return(
        <>
            <div className="containers">
                <form action="stylesheet" className="form">
                    <header className="header">
                        <h1><samp>FORMULARIO</samp></h1>
                    </header>
                    <label htmlFor="name" className="form_label">¿Como se llama el duo de djs Fundadores de AFTERLIFE?</label>
                    <input type="text" className="form_input" name="pregunta1" placeholder="Responde..." id="pregunta1"/>

                    <label htmlFor="name" className="form_label">¿En donde debuto el proyecto Genesys de Anyma?</label>
                    <input type="text" className="form_input" name="pregunta2" placeholder="Responde..." id="pregunta2"/>

                    <label htmlFor="name" className="form_label">¿Como se llama el proyecto de CARMINE CONTE (MRAK)?:</label>
                    <input type="text" className="form_input" name="pregunta3" placeholder="Responde..." id="pregunta3"/>

                    <label htmlFor="name" className="form_label">¿Cual es el tema mas conocido de CAMELPHAT?:</label>
                    <input type="text" className="form_input" name="pregunta4" placeholder="Responde..." id="pregunta4"/>

                    <label htmlFor="name" className="form_label">Nombra 6 djs que conformen eL sello AFTERLIFE</label>
                    <input type="text" className="form_input" name="pregunta5" placeholder="Responde..." id="pregunta5"/>

                    <input type="submit" className="enviar" value="Enviar formulario" />

                </form>
            </div>
        
        </>
    )
}