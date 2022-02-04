import React,{Fragment,useState ,useEffect} from 'react'
import { useAlert } from 'react-alert';
import {useDispatch,useSelector} from 'react-redux'
import MetaData from '../layouts/MetaData'
import {Link} from 'react-router-dom';
import Loader from '../layouts/Loader';
import {login,clearErrors} from '../../action/userActions'
import { useHistory } from 'react-router';
const Login = ({}) => {
    const history = useHistory()
    const alert=useAlert();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const {isAuthenticated,error,loading} = useSelector(state=>state.auth)
 const submitHandler=(e)=>{
     e.preventDefault()
     dispatch(login(email, password))
 }

    useEffect(() => {
        if(isAuthenticated) {
            history.push('/')
        }
        if(error){
            alert.error(error)
            dispatch(clearErrors) }
    }, [dispatch,alert,isAuthenticated,error,history])
    return (
        <Fragment>
            {loading?<Loader/>:(
                <Fragment>
                    <MetaData title={"login"} />
                    <div className="row wrapper"> 
		<div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>

            <Link to="/password/forgot" className="float-right mb-4">Forgot Password?</Link>
  
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
            >
              LOGIN
            </button>

            <Link to="/register" className="float-right mt-3">New User?</Link>
          </form>
		  </div>
    </div>
                </Fragment>
                )}
        </Fragment>
    )
}

export default Login
