import React from "react"
import Formulario from "./Formulario"
import Card from "./Card"

const Dibujar = ({formu,onChange,onSubmit})=> (
    <div className="container">
                <div className="cardContainer">
                    <Card {...formu}/>
                </div>
                <div className="formContainer">
                    <Formulario
                        onSubmit={onSubmit} 
                        onChange={onChange}
                        formu={formu}
                    />
                </div>
            </div>
            )


export default Dibujar