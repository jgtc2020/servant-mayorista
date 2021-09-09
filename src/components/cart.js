import React from 'react';
import ReactDOM from 'react-dom';
import '../css/cart.css';

const Cart = ({ handleCartClose })=>{

const handleContact = ()=>{
  window.open("https://api.whatsapp.com/send?phone=+5491122700260&text=Hola! quiero estos productos de Servant Argentina: Nokia Charcoal 2gb Ram 32gb, Cantidad: 1und, Precio: $23.999, Total de compra: $23.999");
};




  return(
    <React.Fragment>
    <div className="modal-cart-container">
      <div className="container-items-header-cart">
        <i onClick={handleCartClose} class="icon-cart-close fas fa-times"></i>
        <h1 className="title-header-cart">Carrito de compras</h1>
      </div>

      <div className="general-container-items-cart">
          
      </div>

      <div className="container-items-finish-shop-cart span-shop">
          <h1 className="title-total-price-cart">Total: $23.999</h1>
          <button className="btn-finish-shop-cart" type="button" name="button" onClick={handleContact}>Finalizar compra</button>
      </div>

    </div>
    </React.Fragment>
  )
};
export default Cart;
