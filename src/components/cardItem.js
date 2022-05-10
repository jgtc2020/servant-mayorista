import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const CardItem = ({ item })=>{
const history = useHistory();
const handleDescription = id => history.push(`/productos/descripcion/${id}`);

  return(
    <React.Fragment>
      <div className="card-section-4">
       <div className="container-text-section-4">
       <i class="icon-favorites-card-item-product btn-favorites far fa-heart"></i>
         <img className="img" src={item.image} />
         <div className="container-text-off-card-item">
            <p className="text-description-product middle">{item.price}</p>
            <p className="text-description-off">10% OFF</p>
         </div>
         <h1 className="title-primary-price price">{item.name}</h1>
         <button className="btn-buy-product" type="button" onClick={()=> handleDescription(item.name)} name="button">Ver detalles</button>
       </div>
      </div>
    </React.Fragment>
  )
};
export default CardItem;
