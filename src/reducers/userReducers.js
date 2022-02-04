import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS
} from '../constents/userConstents'
export const authReducer=(state={user:{}},action)=>{
    switch (action.type) {
        case REGISTER_USER_REQUEST:
        case LOGIN_REQUEST:
            return {
                loading:true,
                isAuthenticated:false,
            }
        case REGISTER_USER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case REGISTER_USER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                user:null,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
                 ...state,
                 error:null,
            }
        default:
            return state
    }
}