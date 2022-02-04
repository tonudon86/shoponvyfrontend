import './App.css'
import React,{useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home'
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import { Register } from './components/user/Register';

import { loaduser } from './action/userActions';
import store from './store'
function App() {


  useEffect(() => {
    store.dispatch(loaduser())
  }, [ ]);
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="container">
      <Route path="/"  exact>
        <Home />
     </Route>
     <Route path="/search/:keyword"  >
        <Home />
     </Route>
     <Route path="/product/:id" exact>

       <ProductDetails/>
     </Route >
     <Route path="/login" exact>

<Login/>
</Route >
<Route path="/register" exact>
    
    <Register/>
    </Route >
     </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
