//Componente de tipo Funcional
import React, {Fragment} from 'react';
import './navBar.css';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <Fragment>
        <header class="header">
        <div class="logo">
            <a>TuTienda.com</a>
        </div>
        <nav>
            <ul class="navsLinks">
             <Link className='Link' to="/"><a>INICIO</a></Link>
             <Link className='Link' to="/about"><a>SOBRE NOSOTROS</a></Link>
             <Link className='Link' to="/contact"><a>CONTACTO</a></Link>
            </ul>
        </nav>
        </header>
    </Fragment>
  )
}

export default NavBar