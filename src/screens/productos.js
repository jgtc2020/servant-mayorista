import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/productos.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Celulares from '../components/celulares.js';
import Cargadores from '../components/cargadores.js';
import Auriculares from '../components/auriculares.js';
import Cart from '../components/cart.js';
import Fundas from '../components/fundas.js';
import Aos from 'aos';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

const Productos = ()=>{


  const url ='http://cruce-app.herokuapp.com/products';
  const [todos, setTodos] = useState([]);
  const fetchApi = async ()=>{
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };


  useEffect(()=>{
    fetchApi();
  }, [])


  useEffect(() =>{
      Aos.init({duration: 2000});
    }, []);

const [cart, setCart] = useState(false);

const handleCart = ()=>{
  setCart(true);
};

const handleCartClose = ()=>{
  setCart(false);
};



const handleData = (terminoBusqueda)=>{
  var resultadoBusqueda = todos.filter((elemento)=>{
    if (elemento.name.toString().includes(terminoBusqueda)) {
      return elemento;
    }
  })
  setTodos(resultadoBusqueda)
};

  return(
    <React.Fragment>
    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>

    <Header handleData={handleData} todos={todos} handleCart={handleCart} />

    <div className={cart ? 'active-modal-cart-container' : 'modal-cart-container'}>
      <div className="container-items-header-cart">
        <i onClick={handleCartClose} class="icon-cart-close fas fa-times"></i>
        <h1 className="title-header-cart">Carrito de compras</h1>
      </div>

      <div className="general-container-items-cart product-list">
        <div className="card-items-cart">

        <div className="container span-cart">
        <div className="row">
          <div className="col-md-6 span-cart">
            <img className="img-cart" src={require('../img/imgs.png').default} alt="Servant Argentina" />
          </div>
          <div className="col-md-6 span-cart span-container-text-cart">
            <h1 className="title-price-cart">$23.999</h1>
            <p className="text-des-cart">Nokia Charcoal 2gb Ram 32gb</p>
            <h3 class="title-quantity-cart">Cantidad: 1 und</h3>
          </div>
        </div>
      </div>

        </div>
      </div>

      <div className="container-items-finish-shop-cart span-shop">
          <h1 className="title-total-price-cart">Total: $23.999</h1>
          <button className="btn-finish-shop-cart" type="button" name="button">Finalizar compra</button>
      </div>

    </div>

    <div className="banner-home-container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="http://servant-argentina.herokuapp.com/img/banner3.png" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="http://servant-argentina.herokuapp.com/img/banner1.png" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="http://servant-argentina.herokuapp.com/img/banner4.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div className="container container-title-product">
      <h1 className="title-container-product">Todos los productos</h1>
    </div>

    <div className="container-fluid container-section-product">
      <div className="row">
        <div className="col-md-3">
         <input className="input-text-section-product" type="text" placeholder="Buscar productos" />
          <h1 className="title-section-product-filter">Filtrar por secciones</h1>
          <NavLink to="/productos/celulares" className="btn-navlink" activeClassName="active">Celulares</NavLink>
          <NavLink to="/productos/fundas" className="btn-navlink">Fundas</NavLink>
          <NavLink to="/productos/cargadores" className="btn-navlink">Cargadores</NavLink>
          <NavLink to="/productos/auriculares" className="btn-navlink">Auriculares</NavLink>
        </div>
        <div className="col-md-9">
        <Route path="/productos/celulares" exact>
           <Celulares todos={todos} handleCart={handleCart} />
        </Route>
        <Route path="/productos/fundas" exact>
          <Celulares todos={todos} handleCart={handleCart} />
        </Route>
        <Route path="/productos/cargadores" exact>
           <Cargadores todos={todos} />
        </Route>
        <Route path="/productos/auriculares" exact>
           <Auriculares todos={todos} />
        </Route>
        </div>
      </div>
    </div>


    <Footer />
    </motion.div>
    </React.Fragment>
  )
};
export default Productos;
