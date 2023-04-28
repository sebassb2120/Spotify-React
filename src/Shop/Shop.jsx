import "./Shop.css"
export function Shop(){

    let productos=[

        {
            nompreP:"FAN COLOR BLACK",
            imgP:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/Imagen%20de%20WhatsApp%202023-04-24%20a%20las%2013.12.01.jpg?alt=media&token=304be802-714d-4764-9c0f-50fdb6fda5af",
            descripcionP:"tall embroidered black afterlife fan",
            precioP:"15 USD",
            id:"1"
        },

        {
            nompreP:"T-SHIRT LOGO AFTERLIFE",
            imgP:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/camsia.jpg?alt=media&token=1fdbf4c6-674c-459c-a17a-84bfdc1cf444",
            descripcionP:"black t-shirt with afterlife logo",
            precioP:"35 USD",
            id:"2"
        },
        
        {
            nompreP:"CAP LOGO AFTERLIFE",
            imgP:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/gorra.jpg?alt=media&token=3651d1ca-3690-406a-957c-a52ea1d37513",
            descripcionP:"white cap with afterlife logo",
            precioP:"20 USD",
            id:"3"
        },
        
        {
            nompreP:"SOCKS AFTERLIFE",
            imgP:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/medias.jpg?alt=media&token=0d3d5c5a-4ec7-42bb-81cd-0352627683b2",
            descripcionP:"white socks with afterlife logo",
            precioP:"10 USD",
            id:"4"
        },

        {
            nompreP:"VINYL MRAK - One EP",
            imgP:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/binilo.jpg?alt=media&token=1ac94e7a-fcc5-456d-9af2-9cef5bbececa",
            descripcionP:"A consummate artist, Conte’s unwavering commitment to constantly creating music has led to the conception of MRAK - An extension of Tale Of Us that will feed back into the duo’s ethos. ",
            precioP:"12 USD",
            id:"5"
        },

        {
            nompreP:"Woo York – Land Of Heroes",
            imgP:"https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/OTROBINILO.webp?alt=media&token=68ffa862-e3c4-4c47-a089-b9028a1d50f7",
            descripcionP:"Woo York - Land Of Heroes EP (Afterlife Recordings) Our Ukrainian brothers Woo York are back on Afterlife again with this mesmerizing two",
            precioP:"12 USD",
            id:"6"
        }
    ]


    return(
        <>
           
            <section className="banner">
                <div className="container">
                    <div className="carousel">
                        <div className="image"><span>FAN</span></div>
                        <div className="image"><span>VINYLS</span></div>
                        <div className="image"><span>T-SHIRTS</span></div>
                        <div className="image"><span>CAPS</span></div>
                        <div className="image"><span>SOCKS</span></div>
                    </div>
                </div>
            </section>

            <section>
                <br /><br /><br />
                <h1 className="titulo">OUR MERCHANDICE</h1>
            </section>

                <div className="row row-cols-1 row-cols-md-3 ">
                    {
                        productos.map(function(producto){

                            
                            return(

                                <div className="conta">
                                    <div className="card">
                                        <h1>{producto.nompreP}</h1>
                                        <img src={producto.imgP} alt="" />
                                        <div className="contenido">
                                            <p>{producto.descripcionP}</p>
                                            <h6>{producto.precioP}</h6>
                                        </div>
                                    </div>

                                </div>

                                
                            )
                        })
                        
                    }
                </div>    


        



        
        </>
    )
}