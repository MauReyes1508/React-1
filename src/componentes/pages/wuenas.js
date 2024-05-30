import React from "react";
import "../CSS/stilo.css";
import Formulario from "../Formulario";
import Card from "../Card"

export default class Wuenas extends React.Component{
    state={
        form:{
            nombre: '',
            decip: '',
            img: '',
            color: ''
        }
    }
    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value}
        })
    }
    render(){
        return(
            <div>
                <Card
                    {...this.state.form}
                />
                <Formulario
                    onChange = {this.handleChange}
                    form = {this.state.form}
                />
            </div>
        )
    }
}