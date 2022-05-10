import React from 'react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ReactDOM from 'react-dom';
import { useParams, useHistory } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/header.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

const ItemDescription = ({ item })=>{

  return(
    <React.Fragment>
    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>
    <Header />

    <div className="container container-Description">
    <div class="row">
      <div className="container-img col-md-2">
        <div className="box-img-choosing">
          <img className="img-description-box" src={item.image} alt=""/>
        </div>
        <div className="box-img-choosing">
          <img className="img-description-box" src={item.image} alt=""/>
        </div>
        <div className="box-img-choosing">
          <img className="img-description-box" src={item.image} alt=""/>
        </div>
      </div>
      <div className="container-img-center col-md-7">
      <Swiper
      autoplay={{delay:3000}}
      spaceBetween={50}
      slidesPerView={2}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      breakpoints={{
    // when window width is >= 640px
    "@0.00": {
      slidesPerView: 1,
        spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    '@1.00': {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  }}
    >

    <div className="container-slide">
      <SwiperSlide>
      <img className="img-item-descripcion" src={item.image} />
      </SwiperSlide>

      <SwiperSlide>
      <img className="img-item-descripcion" src={item.image} />
      </SwiperSlide>

      <SwiperSlide>
        <img className="img-item-descripcion" src={item.image} />
      </SwiperSlide>

    </div>

    </Swiper>

      </div>
      <div className="col-md-3">
       <h1 className="title-descripcion-view">{item.name}</h1>
         <h1 className="title-descripcion-price">{item.price}<h1 className="tag-off-descripcion">10% OFF</h1></h1>
         <h1 className="title-off-view"><h1 className="title-off-view tag-off-title-delivery">Llega mañana</h1> Envío gratis a partir de 6mil pesos</h1>
         <div className="conatiner-button">
           <button className="btn-descripcion-buy" type="button" name="button">Comprar</button>
           <button className="btn-descripcion-cart" type="button" name="button">Agregar</button>
         </div>
      </div>
    </div>
    </div>

    </motion.div>
    </React.Fragment>
  )
};
export default ItemDescription;
