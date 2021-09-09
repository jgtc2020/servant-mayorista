import React, {useEffect, useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './screens/home';
import Productos from './screens/productos';
import Description from './components/Description.js';


const App = () => {

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

  return(
    <Router>
     <Switch>
       <Route path="/" exact>
        <Home />
       </Route>
       <Route path="/productos" exact>
        <Productos todos={todos} />
       </Route>
       <Route path="/productos/celulares" exact>
        <Productos />
       </Route>
       <Route path="/productos/fundas" exact>
        <Productos />
       </Route>
       <Route path="/productos/cargadores" exact>
        <Productos />
       </Route>
       <Route path="/productos/auriculares" exact>
        <Productos />
       </Route>
       <Route path="/productos/auriculares/descripcion/:id" exact>
        <Description item={todos} />
       </Route>
     </Switch>
    </Router>
  )
};

export default App;
