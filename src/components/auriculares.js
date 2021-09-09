import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Auriculares = ({ handleCart })=>{
  return(
    <React.Fragment>
    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>
    <div className="container">
      <div className="row">

        <div className="col-md-3">
          <div className="card-section-4">
           <img className="img-card-swiper" src={require('../img/au.png').default} alt="imágen sección swiper" />
           <div className="container-text-section-4">
             <h1 className="title-primary-price">$23.999</h1>
             <p className="text-description-product">Nokia Charcoal 2gb Ram 32gb</p>
             <button className="btn-buy-product" type="button" name="button" onClick={handleCart}>Comprar</button>
           </div>
          </div>
          </div>

          <div className="col-md-3">
            <div className="card-section-4">
             <img className="img-card-swiper" src={require('../img/au.png').default} alt="imágen sección swiper" />
             <div className="container-text-section-4">
               <h1 className="title-primary-price">$23.999</h1>
               <p className="text-description-product">Nokia Charcoal 2gb Ram 32gb</p>
               <button className="btn-buy-product" type="button" name="button">Comprar</button>
             </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-section-4">
             <img className="img-card-swiper" src={require('../img/au.png').default} alt="imágen sección swiper" />
             <div className="container-text-section-4">
               <h1 className="title-primary-price">$23.999</h1>
               <p className="text-description-product">Nokia Charcoal 2gb Ram 32gb</p>
               <button className="btn-buy-product" type="button" name="button">Comprar</button>
             </div>
            </div>
            </div>

            <div className="col-md-3">
              <div className="card-section-4">
               <img className="img-card-swiper" src={require('../img/au.png').default} alt="imágen sección swiper" />
               <div className="container-text-section-4">
                 <h1 className="title-primary-price">$23.999</h1>
                 <p className="text-description-product">Nokia Charcoal 2gb Ram 32gb</p>
                 <button className="btn-buy-product" type="button" name="button">Comprar</button>
               </div>
              </div>
              </div>

              <div className="col-md-3">
                <div className="card-section-4">
                 <img className="img-card-swiper" src={require('../img/au.png').default} alt="imágen sección swiper" />
                 <div className="container-text-section-4">
                   <h1 className="title-primary-price">$23.999</h1>
                   <p className="text-description-product">Nokia Charcoal 2gb Ram 32gb</p>
                   <button className="btn-buy-product" type="button" name="button" onClick={handleCart}>Comprar</button>
                 </div>
                </div>
                </div>

                <div className="col-md-3">
                  <div className="card-section-4">
                   <img className="img-card-swiper" src={require('../img/au.png').default} alt="imágen sección swiper" />
                   <div className="container-text-section-4">
                     <h1 className="title-primary-price">$23.999</h1>
                     <p className="text-description-product">Nokia Charcoal 2gb Ram 32gb</p>
                     <button className="btn-buy-product" type="button" name="button">Comprar</button>
                   </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card-section-4">
                   <img className="img-card-swiper" src={require('../img/au.png').default} alt="imágen sección swiper" />
                   <div className="container-text-section-4">
                     <h1 className="title-primary-price">$23.999</h1>
                     <p className="text-description-product">Nokia Charcoal 2gb Ram 32gb</p>
                     <button className="btn-buy-product" type="button" name="button">Comprar</button>
                   </div>
                  </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card-section-4">
                     <img className="img-card-swiper" src={require('../img/au.png').default} alt="imágen sección swiper" />
                     <div className="container-text-section-4">
                       <h1 className="title-primary-price">$23.999</h1>
                       <p className="text-description-product">Nokia Charcoal 2gb Ram 32gb</p>
                       <button className="btn-buy-product" type="button" name="button">Comprar</button>
                     </div>
                    </div>
                    </div>

      </div>
    </div>
    </motion.div>
    </React.Fragment>
  )
};
export default Auriculares;
