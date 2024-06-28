import React from "react";
import { useNavigate } from "react-router-dom";
import Contenedor from "./Contenedor";

const Navegar = () =>{
    const navigate = useNavigate()
    return <Contenedor navigate={navigate}/>
}

export default Navegar