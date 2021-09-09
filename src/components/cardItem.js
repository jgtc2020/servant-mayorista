import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const CardItem = ({ item })=>{
const history = useHistory();
const handleDescription = id => history.push(`/productos/auriculares/descripcion/${id}`);

  return(
    <React.Fragment>
    <div data-aos='fade-up' className="col-6 col-sm-6 col-md-4 col-lg-3">
      <div className="card-section-4">
       <div className="container-text-section-4">
         <img className="img" src={item.image} />
         <p className="text-description-product middle">{item.price}</p>
         <h1 className="title-primary-price price">{item.name}</h1>
         <button className="btn-buy-product" type="button" onClick={()=> handleDescription(item.name)} name="button">Comprar</button>
       </div>
      </div>
      </div>
    </React.Fragment>
  )
};
export default CardItem;
