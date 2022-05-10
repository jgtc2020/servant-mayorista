import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = ({ handleAppear, handleCart, handleData })=>{

const [data, setData] = useState("");
const [busqueda, setBusqueda] = useState("");


const handleChange = (e)=>{
  setBusqueda(e.target.value);
};

const history = useHistory();

const handleNavigation = (event)=>{
  if(event.key === 'Enter'){
    history.push(`/productos/${data}`);
  }
};

  return(
    <React.Fragment>
    <div className="header-band-initial">
      <div className="nav-items-header">

        <div className="container-nav-item">
          <h1 className="item-nav"><i class="icon-item-left fas fa-tags"></i>Servant Mayorista</h1>
        </div>

        <div className="container-nav-item span-right">
          <h1 className="item-nav"><img className="img-logo" src={require('../img/logo.png').default} alt="Imagen Servant" />Servant Argentina</h1>
        </div>

      </div>
    </div>

    <div className="header-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/"><img className="img-logo-header-container" src={require('../img/servant.png').default} alt="Imagen Servant" /></Link>
          </div>
          <div className="col-md-6 span-container-input">
            <input className="search-header-container" type="text" name="buscador" placeholder="Buscar productos en nuestra sección mayorista" onChange={handleData} onKeyPress={handleNavigation} />
              <div className="card-search-utilities">
               <h1 className="item-card-search-utilities">{data}</h1>
                <h1 className="title-card-search-utilities">Busquedas más recientes</h1>
                <h3 className="item-card-search-utilities">Iphone 11 pro max</h3>
                <h3 className="item-card-search-utilities">Fundas para iPhone xs</h3>
                <h3 className="item-card-search-utilities">Auriculares para iPhone xs</h3>
                <h3 className="item-card-search-utilities">Vidrio templado para iPhone xs</h3>
                <h3 className="item-card-search-utilities">Parlante Bluetooh</h3>
                <h3 className="item-card-search-utilities">Cargador de celulares</h3>
              </div>
          </div>
          <div className="col-md-3 container-icons">

            <div className="container-icon">
              <div className="mark-contain">
              </div>
              <i onClick={handleAppear} class="icon-likes-favorites far fa-heart"></i>
            </div>

            <div className="container-icon">
              <div className="mark-contain">
              </div>
              <i onClick={handleCart} class="icon-cart-header fas fa-shopping-cart"></i>
            </div>

          </div>
        </div>
      </div>
    </div>

    </React.Fragment>
  )
};
export default Header;
