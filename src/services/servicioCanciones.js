    export async function consultarCanciones(){
        //RECETA PARA CONSUMIR APIS CON JS

        //1. PA' DONDE VOY 
        // URL + EP DEL SERVICIO 
        const IDARTISTA="240wlM8vDrf6S4zCyzGj2W"
        const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=US`
        const TOKEN="Bearer BQCVfI3SnlD8N7_URfE4YR0X2LR1rOkb-kZduZpa3weG8qJnsvmH0UrdmubO_fyR5IgHrgVeQMaMTzuTX1blonyy8RPhyEAC_dUr8kcHbOCDSFZUjPk"

        //2. QUE VAS HACER EN EL LUGAR QUE VAS
        // CONFIGURO LA PETICION
        let peticion={
            method:"GET",
            headers:{
                "Authorization":TOKEN
            }
        }

        //3. PIDA EL TAXI
        //utilice la promesa FETCH para ir al back y consumir el API
        let respuesta=await fetch(URI, peticion)
        let cancion =await respuesta.json()

        return cancion

    }
    