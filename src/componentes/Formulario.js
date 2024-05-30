import React from "react";

export default class Formulario extends React.Component{
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        const {onChange, form} = this.props
        return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Formulario</legend>
                            <p>
                                <input type="text" name="nombre" placeholder="Nombre..." onChange={onChange} value={form.nombre}/>
                            </p>
                            <p>
                                <textarea type="text" name="descip" placeholder="Descripcion..." onChange={onChange} value={form.decip}></textarea>
                            </p>
                            <p>
                                <input type="image" alt="Imagen" name="img" onChange={onChange} value={form.img} />
                            </p>

                            <button type="submit">Enviar</button>
                        </fieldset>
                    </form>
                </div>
        )
    }

}