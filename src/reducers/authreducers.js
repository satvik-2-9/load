import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS ,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
     REGISTER_USER_SUCCESS,
     LOAD_USER_REQUEST,
     LOAD_USER_SUCCESS,
     LOAD_USER_FAIL,
   LOGOUT_SUCCESS,
   LOGOUT_FAIL,
   ALL_USERS_REQUEST,
   ALL_USERS_SUCCESS,
   ALL_USERS_FAIL,
   UPDATE_USER_REQUEST,
   UPDATE_USER_SUCCESS,
   UPDATE_USER_FAIL,
   USER_DETAILS_REQUEST,
   USER_DETAILS_SUCCESS,
   USER_DETAILS_FAIL} from '../constants/authconstants.js'


export const authReducer=(state={user:{}},action)=>{
    switch(action.type){

        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading:true,
                isAuthenicated:false,
            }

            case LOGIN_SUCCESS:
            case REGISTER_USER_SUCCESS:
            case LOAD_USER_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    isAuthenicated:true,
                     user:action.payload
                }

                case LOGOUT_SUCCESS:
                    return {
                        loading:false,
                        isAuthenicated:false,
                        user:null
                    }
                case LOAD_USER_FAIL:
                    return{
                        loading:false,
                        isAuthenicated:false,
                        user:null,
                        error:action.payload
                    }
                    case LOGOUT_FAIL:
                        return{
                            ...state,error:action.payload
                        }
                case LOGIN_FAIL:
                case REGISTER_USER_FAIL:
                    return{
                        ...state,
                        loading:false,
                        isAuthenicated:false,
                        user:null,
                        error:action.payload
                    }
                    case CLEAR_ERRORS:
                        return{
                            ...state,
                            error:action.payload
                        }
    default:
        return state;

    }
}

export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {

        case ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
 
        case ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        // case CLEAR_ERRORS:
        //     return {
        //         ...state,
        //         error: null
        //     }

        default:
            return state;
    }
}

export const userReducer = (state = {}, action) => {
    switch (action.type) {

      
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                isUpdated:false

            }

      
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated:true
            }

      case UPDATE_USER_FAIL:
                  return {
                ...state,
                loading: false,
                error: action.payload,
                isUpdated:false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const driverDetailsReducer = (state = { driver: {},driver1:{} }, action) => {
    switch (action.type) {

        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
           }

        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                driver: action.payload,
                driver1:action.payload1
            }

        case USER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const authdriver=(state={driver:{}},action)=>{
    switch(action.type){

        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading:true,
                isAuthenicated:false,
                isApproved:false
            }

            case LOGIN_SUCCESS:
            case REGISTER_USER_SUCCESS:
            case LOAD_USER_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    isAuthenicated:true,
                     driver:action.payload,
                     isApproved:true
                }

                case LOGOUT_SUCCESS:
                    return {
                        loading:false,
                        isAuthenicated:false,
                        driver:null
                    }
                case LOAD_USER_FAIL:
                    return{
                        loading:false,
                        isAuthenicated:false,
                        driver:null,
                        error:action.payload,
                        isApproved:false
                    }
                    case LOGOUT_FAIL:
                        return{
                            ...state,error:action.payload
                        }
                case LOGIN_FAIL:
                case REGISTER_USER_FAIL:
                    return{
                        ...state,
                        loading:false,
                        isAuthenicated:false,
                        driver:null,
                        error:action.payload
                    }
                    case CLEAR_ERRORS:
                        return{
                            ...state,
                            error:action.payload
                        }
    default:
        return state;

    }
}
