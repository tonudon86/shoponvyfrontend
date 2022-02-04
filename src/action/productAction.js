import axios from 'axios'
import { 
    ALL_PRODUCTS_SUCCESS,CLEAR_ERRORS,
    ALL_PRODUCTS_FAIL,ALL_PRODUCTS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
} from '../constants/productConstants'

const host="http://127.0.0.1:5000"
// const host="https://shoponvy.herokuapp.com"
export const getProducts=(keyword='',currentPage=1,price,category,ratings=0)=>async(dispatch)=>{

    try {
            dispatch({
                type:ALL_PRODUCTS_REQUEST
            })
            let link =`${host}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${ratings}` 
            
            if(category){
                link=`${host}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${ratings}` 
            }
            
            console.log(link)
            const {data}=await axios.get(link)

            dispatch({
                type:ALL_PRODUCTS_SUCCESS,
                payload:data
            })
    } catch (error) {
         console.log(error.response.data.message)
        dispatch({ 
            type: ALL_PRODUCTS_FAIL,
            payload:error.response.data.message
            
        })
    }
}




export const getProductDetails=(id)=>async(dispatch)=>{
    try {
            dispatch({
                type:PRODUCT_DETAILS_REQUEST
            })

            const {data}=await axios.get(`${host}/api/v1/product/${id}`)

            dispatch({
                type:PRODUCT_DETAILS_SUCCESS,
                payload:data.product
            })
    } catch (error) {
         console.log(error.response.data.message)
        dispatch({ 
            type: PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message
            
        })
    }
}


// clear erros
export const clearErrors = () => async(dispatch)=>{
    dispatch({ 
        type: CLEAR_ERRORS
    })
}

