import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CardItem from '../components/cardItem.js';

const Celulares = ({ handleCart })=>{

  const url ='http://cruce-app.herokuapp.com/products';
  const [todos, setTodos] = useState();
  const fetchApi = async ()=>{
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  useEffect(()=>{
    fetchApi();
  }, [])

  return(
    <React.Fragment>
    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>
    <div className="container">
      <div className="row">
      {!todos ? 'Cargando...' :
              todos.map( (item,index)=>{
              return <CardItem key={item.id} item={item}/>
        })
      }

      </div>
    </div>
    </motion.div>
    </React.Fragment>
  )
};
export default Celulares;
