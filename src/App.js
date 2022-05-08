import React from "react";

import Catalogo from './pages/productos';
import { Data } from "./pages/productos/data";
import {  Routes, Route } from "react-router-dom"
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalogo" element={<Catalogo Data={Data} titulo={'Productos'}/>} />
			</Routes>
    
    </div>
  );
}

export default App;
