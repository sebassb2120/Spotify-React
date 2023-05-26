import React, { useState } from 'react';

export async function Tokeninfi() {
  const [token, setToken] = useState(null);

  const fetchData = async () => {
    try {
        
      const response = await fetch('BQAEluMhratbuR274_dXvyPZAHncqCJ8m9eqQ_CilUDHAB-kTeR7IJD7dSj7pg184W43TVq51f33SdFoh3hxFFiTq8jyrj3aC5tlY2NSsoDPlnwA6-s', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        const receivedToken = data.token; // Asegúrate de que la respuesta del servidor tenga un campo llamado 'token'

        setToken(receivedToken);
      } else {
        // Manejo de errores si la solicitud no fue exitosa
        console.error('Error al obtener el token del servidor');
      }
    } catch (error) {
      // Manejo de errores en caso de una excepción
      console.error('Error en la solicitud', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return token;
}

export default function MyComponent() {
  const token = Tokeninfi();



}
