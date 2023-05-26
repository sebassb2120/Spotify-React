import { consultarCanciones } from "../services/servicioCanciones";
import {Tokeninfi} from "../services/Tokeninfi"
import { useState, useEffect } from "react";
import{Carga} from'../shared/Carga/Carga'
import "./Musica.css"

export function Musica() {

  const [canciones, setCanciones] = useState(null);
  const [estaCargando, setEstaCargando] = useState(true);

  useEffect(function(){
    Tokeninfi().then(function(respuesta){
      setCanciones(token.tracks);
      setEstaCargando(false)
    })
  },[])

  useEffect(function () {
    consultarCanciones().then(function (respuesta) {
      setCanciones(respuesta.tracks);
      setEstaCargando(false);
    });
    
  }, []);
  

  if (estaCargando) {
    return (
      <>
        <Carga/>
    
      </>
    );
  } else {
    
    return (
      <>

        <div className="contenedores">
          <div className="row ">
          {
            canciones.map(function (cancion) {
              //console.log(canciones);
              return(
                //<div className="col">
                    <div className="card1 g-5">

                      <div className="face front">
                        <img src="https://i.scdn.co/image/ab67616d0000b273a30bc7a275cc3e72011d9891" alt="fotox" />
                        <h3>{cancion.name}</h3>
                      </div>

                      <div className="face back">
                        <h4>{cancion.name}</h4>
                        <img src="https://i.scdn.co/image/ab67616d0000b273a30bc7a275cc3e72011d9891" alt="fotox" />
                        <h4>{cancion.type}</h4>
                        <audio className="musica" controls src={cancion.preview_url}></audio>

                        <div className="link g-5">
                          <p className="desc">time:<strong> {cancion.duration_ms}</strong></p>
                          <p><strong>{cancion.popularity}</strong></p>
                        </div>
                        
                      </div>
                      
                    </div>
                //</div>
              )

            })
          }

          </div>
        </div>
        
        
      </>
      
    );
    
  }
  
}



/*            <div className="container">
                <div className="images">
                  <img src={cancion.images} />
                </div>

                <div className="product">
                  <h1>{cancion.name}</h1>
                  <h4>{cancion.type}</h4>
                  <audio className="musica" controls src={cancion.preview_url}></audio>
                  
                  <p className="desc">time:<strong> {cancion.duration_ms}</strong></p>

                  <strong>{cancion.popularity}</strong>
                </div>
              </div>*/
