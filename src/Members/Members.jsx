import "./Members.css"
export function Members() {

  let integrantes=[
    {
      nombre:"Matteo Milleri (Anyma)",
      foto:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/Anyma.jpg?alt=media&token=1fd5a4f4-253b-43f5-86e9-1493738c4074",
      nacimiento:"nació en New York, United States el 19 de Mayo 1988.",
      descripcion:"DJ Matteo Milleri nació en New York, United States el 19 de Mayo, 1988. Hoy tiene 34 años. DJ y músico mejor conocido como parte de Tale Of Us, un dúo de música dance con DJ Carmine Conte. En 2011, lanzaron su EP debut, Dark Song. Bajo el alias Anyma, lanzó un EP en solitario titulado Sentient en el 2021. En 2020, Matteo Milleri, también conocido como Anyma, emprendió su carrera en solitario a partir de su producción musical colaborativa Tales of Us . En 2021 lanzó su primer EP con Anyma, Sentiment en Afterlife Records. Más tarde ese año, en noviembre, presentó su presentación en vivo NFT EVA 0 en Printworks.",
      video:"https://www.youtube.com/embed/PSjPJ-Z08yU?controls=0",
      id:1

    },

    {
      nombre:"Carmine Conte (Mrak)",
      foto:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/marcccc.jpg?alt=media&token=b861a61c-e71e-48d2-953e-f8f3756f44a2",
      nacimiento:"Nació en Toronto, Canada el 21 de Julio, 1982.",
      descripcion:"MRAK supone la irrupción revolucionaria de Carmine Conte, mitad del dúo Tale Of Us, en el terreno del live performance. Fiel a las melodías y armonías que han llevado a la pareja a ser uno de los nombres de mayor éxito en la escena de clubs, pero también influido por un año sin baile ni fiesta, Carmine ha decidido innovar y transformarse, girando las primeras letras de su nombre (Karm) y dando nacimiento a MRAK, un proyecto que se estrenó mundialmente en MUTEK ES+AR 2021 - Hybrid Edition y que contó con la colaboración de la sala BARTS.",
      video:"",
      id:2
    },

    {
      nombre:"AdriaTique",
      foto:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/adriatique.webp?alt=media&token=0e95edd9-38ad-4fce-a3ac-a1efcb0b5da9",
      nacimiento:"Este duo nacio en el año 2009",
      descripcion:"Adriatique es un dúo de DJs suizo conformado por Adrian Shala y Adrian Schweizer. Varían entre el techno y el house, con aires minimalistas, estilo melódico profundo y ritmo sutil e hipnótico.  Shala y Schweizer se conocieron en 2008 y al año siguiente se unieron para formar Adriatique, nombre inspirado en el nombre de pila de ambos. Desde entonces son amigos, compañeros de piso y socios a tiempo completo (que no actúan por separado). Unidos por su gusto musical electrónico, han desarrollado un estilo musical hace hincapié en melodías profundas y ritmos minimalistas y repetitivos; según ellos informan, su credo es que «la música debería ser meditación».",
      video:"",
      id:3
    },

    {
      nombre:"CamelPhat",
      foto:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/camelphattttttttttt%7D.png?alt=media&token=6b234678-11f4-4a71-96ea-7d56b870fdd8",
      nacimiento:"formado en Liverpool en 2004",
      descripcion:"CamelPhat, también conocido como CamelPfaehe, es un dúo de DJ y producción inglés, formado por Dave Whelan y Mike Di Scala, formado en Liverpool en 2004. Son mejor conocidos por el sencillo de 2017  Cola , que alcanzó el puesto número 3 en el UK Dance Chart , y en el número 18 en la UK Singles Chart . El  sencillo fue una colaboración con el acto de baile británico Elderbrook y fue lanzado en Defected Records Dave Whelan y Mike DiScala se conocieron en la tienda de discos de Liverpool 3 BeatRecords y ambos eran disc jockeys en clubes nocturnos de la ciudad.",
      video:"",
      id:4
    },

  ]

  function firulkais(evento){
    (evento.target.classList.add("blancoynegro"))
    
  }

  function otroevento(evento){
    (evento.target.classList.remove("blancoynegro"))

  }


  return (
    <>
      <div className="">

        {
          integrantes.map(function(integrante){
            return(
              <section className="fondo">
                  <div className="container1">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <img src={integrante.foto} alt="" width="500" height="500"  className="mt-5" onMouseOver={firulkais} onMouseLeave={otroevento}/>
                      </div>
          
                      <div className="col-12 col-md-6 mt-5">
                        <h3 className=" text-center m-5">{integrante.nombre}</h3>
                        <p className="text-center text-white m-5">{integrante.descripcion}</p> 
                      </div>
                    </div>
                  </div>
              </section>



              
            )
          })
        }
      </div>
    </>
  );
}
