import React from "react";
import Hola from "./saludo"
import Iterador from "./iterante"
import Boton from "./boton"

const Componentes = ({data})=>(
    <React.Fragment>
                 <Hola
                    username = "Rauw"
                />
                <Iterador
                    chao={data}
                />
                <Boton/>
     </React.Fragment>
)

export default Componentes