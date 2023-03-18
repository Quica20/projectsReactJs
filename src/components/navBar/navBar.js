//Componente de tipo Funcional
import React, {Fragment} from 'react';
import './navBar.css';
import img from './imgNavBar/logo-website-file-globe-icon-svg-wikimedia-commons-21.png'

const NavBar = (props) => {
  return (
    <Fragment>
        <header class="header">
        <div class="logo">
            <img src={img} alt="logo"/>     
        </div>
        <nav>
            <ul class="navsLinks">
             <li><a href='#'>{props.first}</a></li>
             <li><a href='#'>{props.seconds}</a></li>
             <li><a href='#'>{props.third}</a></li>
            </ul>
        </nav>
        </header>
    </Fragment>
  )
}

export default NavBar