import React,{Fragment,useState ,useEffect} from 'react'
import { useAlert } from 'react-alert';
import {useDispatch,useSelector} from 'react-redux'
import MetaData from '../layouts/MetaData'
import {Link} from 'react-router-dom';
import Loader from '../layouts/Loader';
import {login,clearErrors} from '../../action/userActions'
import { useHistory } from 'react-router';

export const Register = () => {

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
const{name,email,password} = user;
const [avatar, setavatar] = useState("")
const [avatarPreview, setavatarPreview] = useState('')
    const history = useHistory()
    const alert=useAlert();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const {isAuthenticated,error,loading} = useSelector(state=>state.auth)
 const submitHandler=(e)=>{
     e.preventDefault()
     const formData=new FormData()
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
        <div>
            
        </div>
    )
}
