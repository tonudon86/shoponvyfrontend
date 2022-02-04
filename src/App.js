import './App.css'
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
function App() {
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
     </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
