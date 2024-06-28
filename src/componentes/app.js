import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConteComponentes from "./pages/ConteComponentes";
import Nofound from "./pages/Nofound";
import Home from "./pages/Home";
import Contenedor from "./pages/Contenedor";
//import Navegar from "./pages/Navegar";

const App = ()=>(
    <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                
                <Route exact path="/formu" element={<Contenedor/>}></Route>
                <Route exact path="/cartas" element={<ConteComponentes/>}></Route>
                <Route exact path="*" element={<Nofound/>}></Route>
            </Routes>
        </BrowserRouter>
)

export default App  