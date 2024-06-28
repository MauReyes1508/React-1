import React from "react";
import Componentes from "../Componentes";
import useFetch from "../../Hook/hook";
import url from "../config";

const ConteComponentes = () => {
    const { data, loading, error } = useFetch(`${url}/info`);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error al cargar los datos: {error.message}</p>;
    }

    return <Componentes data={Array.isArray(data) ? data : []} />;
};


/* export default class ConteComponentes extends React.Component{
        state = {
            data:[]
        }
        async componentDidMount(){
            await this.cargarComponentes()
        }
        cargarComponentes = async()=>{
            let res = await fetch('http://localhost:8000/api/info')
            let data = await res.json()
            this.setState({
                data
            })
            console.log(data)
        }
    
    render(){
        return <Componentes
                data = {this.state.data}
            />
    }
} */

    export default ConteComponentes