import React from "react";
import Dibujar from "../Dibujar";

/* const Contenedor =()=>{
    const [data,Setdata]= useState([])
} */
export default class Contenedor extends React.Component{
    state = {
        formu: {
            nombre: '',
            descripcion: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }

    handleChange = e => {
        this.setState({
            formu: {
                ...this.state.formu,
                [e.target.name]: e.target.value
            }
        });
    }
 
    handleSubmit = async e => {
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.formu)
            };
            let res = await fetch('http://localhost:8000/api/info', config);
            let json = await res.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }
        console.log(this.state);
    }
    render(){
        return <Dibujar
        formu={this.state.formu}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
    />
    }

}