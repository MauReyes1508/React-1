import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

const Home = () => (
    <div className="container">
        <h1>BIENVENIDO</h1>
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Formulario</td>
                    <td>
                        <Link to="/formu">
                            <button className="action-button">Formulario</button>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>Lista de Cartas</td>
                    <td>
                        <Link to="/cartas">
                            <button className="action-button">Cartas</button>
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Home;

