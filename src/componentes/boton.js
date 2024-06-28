import React from "react";
import { Link } from "react-router-dom";

const Boton = ()=>(
    <Link to={"/formu"}>
        <button type="button" className="btn">Formulario</button>
    </Link>
)

export default Boton