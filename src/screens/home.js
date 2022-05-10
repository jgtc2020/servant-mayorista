import Aos from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import CardItem from '../components/cardItem.js';
import Footer from '../components/footer.js';
import Favorites from '../components/favorites.js';
import '../css/home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);



const Home = ()=>{

  const [appear, setAppear] = useState(false);

  const handleAppear = ()=>{
    setAppear(true);
  };


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

  return(
    <React.Fragment>

    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>

      <Header handleAppear={handleAppear} />

      {appear &&
        <Favorites />
      }

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



      <div className="container container-instructions">
        <div className="row">
          <div className="col-md-4">
            <div className="card-container-instructions">
              <div className="container-icon">
                <i class="icon-instructions fas fa-cart-arrow-down"></i>
              </div>
              <div className="container-text">
               <h1 className="text-initial-instruction">Realizá tu compra online</h1>
               <h1 className="text-initial-description-instruction">Comprá de manera sencilla y rápida</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card-container-instructions">
            <div className="container-icon">
              <i class="icon-instructions fab fa-whatsapp"></i>
            </div>
            <div className="container-text">
             <h1 className="text-initial-instruction">Confimá tu pedido en Whatsapp</h1>
             <h1 className="text-initial-description-instruction">Tu pedido será enviado por Whatsapp</h1>
            </div>
          </div>
          </div>
          <div className="col-md-4">
          <div className="card-container-instructions">
            <div className="container-icon">
              <i class="icon-instructions fas fa-credit-card"></i>
            </div>
            <div className="container-text">
             <h1 className="text-initial-instruction">Finalizá la compra online</h1>
             <h1 className="text-initial-description-instruction">Decidís como pagar y recibir tu pedido</h1>
            </div>
          </div>
          </div>
        </div>
      </div>


      <div className="container container-title-section-1">
        <h1 className="title-section-1-sections">Descubrí nuestras secciones</h1>
      </div>


      <div className="separation">
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
      slidesPerView: 2,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }}
    >

    <div className="container-slide">
      <SwiperSlide>
      <div className="card-swiper-slide">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-6 card-text">
            <div className="container-item-card-swiper">
              <h1 className="title-main-card-swiper">Celulares</h1>
              <p className="text-description-card-swiper">Smartphones al mejor precio por mayor</p>
              <Link to="/productos/celulares"><button className="btn-card-swiper" type="button" name="button">Visitar</button></Link>
            </div>
          </div>
          <div className="col-6 col-md-6">
            <div className="container-img-card-swiper">
              <img className="img-card-swiper" src={require('../img/imgs.png').default} alt="imágen sección swiper" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card-swiper-slide">
      <div className="container">
        <div className="row">
          <div className="col-md-6 card-text">
            <div className="container-item-card-swiper">
              <h1 className="title-main-card-swiper">Fundas</h1>
              <p className="text-description-card-swiper">Fundas al mejor precio por mayor</p>
              <Link to="/productos/fundas"><button className="btn-card-swiper" type="button" name="button">Visitar</button></Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container-img-card-swiper">
              <img className="img-card-swiper" src={require('../img/imgs.png').default} alt="imágen sección swiper" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card-swiper-slide">
      <div className="container">
        <div className="row">
          <div className="col-md-6 card-text">
            <div className="container-item-card-swiper">
              <h1 className="title-main-card-swiper">Cargadores</h1>
              <p className="text-description-card-swiper">Cargadores al mejor precio por mayor</p>
              <Link to="/productos/cargadores"><button className="btn-card-swiper" type="button" name="button">Visitar</button></Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container-img-card-swiper">
              <img className="img-card-swiper" src={require('../img/imgs.png').default} alt="imágen sección swiper" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="card-swiper-slide">
      <div className="container">
        <div className="row">
          <div className="col-md-6 card-text">
            <div className="container-item-card-swiper">
              <h1 className="title-main-card-swiper">Auriculares</h1>
              <p className="text-description-card-swiper">Auriculares al mejor precio por mayor</p>
                <Link to="/productos/auriculares"><button className="btn-card-swiper" type="button" name="button">Visitar</button></Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container-img-card-swiper">
              <img className="img-card-swiper" src={require('../img/imgs.png').default} alt="imágen sección swiper" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </SwiperSlide>

    </div>

    </Swiper>

      </div>

     <div className="banner-section-2-adds">
      <img className="img-section-2-adds d-block w-100" src="http://servant-argentina.herokuapp.com/img/banner5.png" alt="Sección publicidad seravnt argentina" />
     </div>

     <div className="container container-title-section-3">
       <h1 className="title-section-3-sections">Descubrí nuestras secciones</h1>
     </div>


     <Swiper
     autoplay={{delay:3000}}
     spaceBetween={50}
     slidesPerView={4}
     navigation={true}
     pagination={false}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
     loop={true}
     breakpoints={{
   // when window width is >= 640px
   "@0.00": {
     slidesPerView: 2,
       spaceBetween: 10,
   },
   '@0.75': {
     slidesPerView: 2,
     spaceBetween: 20,
   },
   // when window width is >= 768px
   '@1.00': {
     slidesPerView: 4,
     spaceBetween: 40,
   },
   '@1.50': {
     slidesPerView: 4,
     spaceBetween: 50,
   },
 }}
   >

   <div className="container-slide">

   {todos.map( (item,index)=>{
           return(
             <SwiperSlide>
              <div className="card-swiper-home">
              <motion.div
              initial={{opacity: 0}}
              exit={{opacity: 0}}
              animate={{opacity: 1}}>
                <CardItem key={item.id} item={item}/>
              </motion.div>
              </div>
             </SwiperSlide>
           )
     })
   }

   </div>

   </Swiper>


   <div className="container container-instructions container-section-4">
     <div className="row">
       <div className="col-md-4">
         <div className="card-container-instructions">
           <div className="container-icon">
             <i class="icon-instructions fas fa-cart-arrow-down"></i>
           </div>
           <div className="container-text">
            <h1 className="text-initial-instruction">Realizá tu compra online</h1>
            <h1 className="text-initial-description-instruction">Comprá de manera sencilla y rápida</h1>
           </div>
         </div>
       </div>
       <div className="col-md-4">
       <div className="card-container-instructions">
         <div className="container-icon">
           <i class="icon-instructions fab fa-whatsapp"></i>
         </div>
         <div className="container-text">
          <h1 className="text-initial-instruction">Confimá tu pedido en Whatsapp</h1>
          <h1 className="text-initial-description-instruction">Tu pedido será enviado por Whatsapp</h1>
         </div>
       </div>
       </div>
       <div className="col-md-4">
       <div className="card-container-instructions">
         <div className="container-icon">
           <i class="icon-instructions fas fa-credit-card"></i>
         </div>
         <div className="container-text">
          <h1 className="text-initial-instruction">Finalizá la compra online</h1>
          <h1 className="text-initial-description-instruction">Decidís como pagar y recibir tu pedido</h1>
         </div>
       </div>
       </div>
     </div>
   </div>


   <Footer />


      </motion.div>
    </React.Fragment>
  )
};
export default Home;
