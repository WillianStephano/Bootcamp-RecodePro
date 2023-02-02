import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Atividades from "./pages/Atividades";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/Cadastro";


export default function Routas() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='atividades' element={<Atividades />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='login' element={<Login />} />
            <Route path='cadastro' element={<Cadastro />} />
         </Routes>
      </BrowserRouter>
   );
}