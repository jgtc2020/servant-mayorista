import React from 'react';
import ReactDOM from 'react-dom';
import { useParams, useHistory } from 'react-router-dom';
import ItemDescription from '../components/ItemDescription.js';

const Description = ({ item=[] })=>{
  const { id } = useParams();
  const history = useHistory();
  const items = item.find(items => items.name === id);
  console.log(items);

  const handleHistory = ()=>{
    history.push("/productos/celulares");
  };

  return(
    <React.Fragment>
    {items && <ItemDescription item={items} />}
    <button onClick={handleHistory} type="button" name="button">Volver</button>
    </React.Fragment>
  )
};
export default Description;
