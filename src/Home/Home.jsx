import { History } from "../History/History"
import { Footer } from "../Footer/Footer"
import { Members } from "../Members/Members"
import './Home.css'
import{Carga} from'../shared/Carga/Carga'
import {useState, useEffect} from 'react';

export function Home(){

     // creacion de la carga
    const[estaCargando, setEstaCargando]=useState(true)
    const[tiempo, setTiempo]=useState(0)

    useEffect(function(){
        if(tiempo>0){
            setEstaCargando(false)
        }else{
            setEstaCargando(true)
        }
    },[tiempo])

    setTimeout(function(){
        setTiempo(1)

    },5000)

 
    

  
    if(estaCargando){

        return(
            <>
                <Carga/>
            </>
        )
    }else{
        return(
            <>
            <section className="banner">

            </section>
            
            <section>
                <History></History>
            </section>
                
            </>
        )
    }

}