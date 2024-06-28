import React from "react";
import Componentes from "../Componentes";
import useFetch from "../../Hook/hook";
import url from "../config"

const ConteComponentes =()=>{
    const {data} = useFetch(`${url}/info`)
    return <Componentes
        data={data}
        />
}
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