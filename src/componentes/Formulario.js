import React from "react";
import './CSS/Formulario.css';

const Formulario =({ onChange, formu, onSubmit })=>(
    <div className="form-container">
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre aquí!!"
                            onChange={onChange}
                            value={formu.nombre}
                        />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            name="descripcion"
                            placeholder="Descripción aquí!!"
                            onChange={onChange}
                            value={formu.descripcion}
                        />
                    </div>
                    <div>
                        <label>URL de la imagen:</label>
                        <input
                            type="text"
                            name="img"
                            placeholder="Imagen aquí!!"
                            onChange={onChange}
                            value={formu.img}
                        />
                    </div>
                    <div>
                        <label>Color1:</label>
                        <input
                            type="text"
                            name="leftColor"
                            placeholder="Color aquí!!"
                            onChange={onChange}
                            value={formu.leftColor}
                        />
                    </div>
                    <div>
                        <label>Color2:</label>
                        <input
                            type="text"
                            name="rightColor"
                            placeholder="Color aquí!!"
                            onChange={onChange}
                            value={formu.rightColor}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
)

/* export default class Formulario extends React.Component {
    render() {
        const { onChange, formu, onSubmit } = this.props;
        return (
            
        );
    }
} */

export default Formulario