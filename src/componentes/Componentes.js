import React from "react";
import "./CSS/Componentes.css";
import Hola from "./saludo";
import Iterador from "./iterante";
import Boton from "./boton";

const Componentes = ({ data = [] }) => (
    <div className="componentesContainer">
        <Hola username="Raúl & Jorge" />
        <Iterador chao={data} />
        <Boton />
    </div>
);

export default Componentes;

