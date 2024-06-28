import React from "react";
import Card from "./Card";

const Iterador = ({chao})=>(
    <React.Fragment>
        {
            chao.map((chao)=>{
                return(
                    <Card
                        key={chao.id}
                        {...chao}
                    />
                )
            })
        }
    </React.Fragment>
)

export default Iterador