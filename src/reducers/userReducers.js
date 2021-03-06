import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from '../constants/userConstants';

export const userSigninReducer = (state = {}, action) => {

}

//switch, based on whatever message is sent, then we dispact a message to the store.

export const userRegisterReducer = (state = {}, action) => {

  switch(action.type){
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload}
    case USER_REGISTER_FAILURE:
      return { loading: false, error: action.payload}
    default: 
      return state ;
  }

}