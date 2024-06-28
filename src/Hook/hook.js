import { useState, useEffect } from "react";

const useFetch = url =>{
    const [data, setData] = useState([])
    useEffect(()=>{                             //Este permite manejar funciones
        const cargarComponentes = async ()=>{
            let res = await fetch(url)
            let data = await res.json()
            setData(data)
            
        }
        cargarComponentes()
    },[url])
    return data
}   

export default useFetch