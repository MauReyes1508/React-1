import React from "react";
import Card from "./Card";

const Iterador = ({ chao }) => (
    <div className="iteradorContainer">
        {
            Array.isArray(chao) && chao.length > 0 ? (
                chao.map((chaoItem) => (
                    <Card
                        key={chaoItem.id}
                        {...chaoItem}
                    />
                ))
            ) : (
                <p>No hay datos disponibles</p>
            )
        }
    </div>
);

export default Iterador;


