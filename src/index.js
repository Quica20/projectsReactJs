import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Componentes */
import NavBar from './components/navBar/navBar';

/* PAGES */
import App from './App';
import Nosotros from './pages/sobreNosotros/sobreNosotros'
import Contacto from './pages/contacto/contacto'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
              <NavBar/>
              <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/about" element={<Nosotros />}/>
                <Route path="/contact" element={<Contacto />}/>
              </Routes>
    </React.StrictMode>
  </Router>
);

