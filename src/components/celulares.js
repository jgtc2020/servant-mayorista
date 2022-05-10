import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CardItem from '../components/cardItem.js';

const Celulares = ({ handleCart, todos })=>{

  return(
    <React.Fragment>
    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>
    <div className="container">
      <div className="row">
      {todos.map( (item,index)=>{
              return (
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 c">
                <motion.div
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                animate={{opacity: 1}}>
                <CardItem key={item.id} item={item}/>
                </motion.div>
                </div>
              )
        })
      }

      </div>
    </div>
    </motion.div>
    </React.Fragment>
  )
};
export default Celulares;
