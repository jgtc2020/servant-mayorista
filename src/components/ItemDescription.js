import React from 'react';
import ReactDOM from 'react-dom';
import { useParams, useHistory } from 'react-router-dom';

const ItemDescription = ({ item })=>{

  return(
    <React.Fragment>
    <img src={item.image}/>
    <h1>{item.name}</h1>
    <h1>{item.price}</h1>
    </React.Fragment>
  )
};
export default ItemDescription;
