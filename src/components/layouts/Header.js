import React ,{Fragment}from 'react'
import Serach from './Search'
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Fragment>
             <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          {/* <img src="./images/logo.png" /> */}
         <Link to="/"> <h4 className="text-white"> Shop On VY</h4> </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
       <Route >
         <Serach/>
       </Route>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link className="btn" to="/login" id="login_btn">Login</Link>

        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">2</span>
      </div>
    </nav>

        </Fragment>
    )
}

export default Header
