//Componente de Tipo clase
import React, {Fragment, useState,useEffect} from "react";
import './App.css';
import axios from 'axios';


/* COMPONENTS */
import CardProduct from './components/cardProduct/cardProduct'





const App = () =>{

  const[data, setData] = useState({});

    useEffect(() => {
        //Con FETCH:
  /*         fetch('https://fakestoreapi.com/products')
        .then(response  => response.json())
        .then(json => console.log(json)) */
  
        //Con AXIOS: (recordar instalar la libreria de axios)
        axios.get('https://fakestoreapi.com/products/1').then((res) => setData(res.data))
    }, []);

    return(
      <Fragment>

                <div class="subtitle">
      <a>PRODUCTOS</a>
    </div>
    <div class="card">
    <CardProduct data = {data}/>
    <CardProduct data = {data}/>
    <CardProduct data = {data}/>
    </div>
      </Fragment>
    )
  
}

export default App;