import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from '../constants/userConstants';

import axios from 'axios';


export const userSignin = (username, password) => async (dispatch) => {
  dispatch({type: USER_SIGNIN_REQUEST, payload: {username, password}});
  try{
    const { data } = await axios.post('/api/users/signin', {username, password});
    dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
    console.log("User sign in success");
    // set userInfo in cookie later
  } catch(error){
    dispatch({type: USER_SIGNIN_FAILURE, payload: error.message});
    console.log("User sign in success");
  }

}

export const userRegister = (username, password) => async (dispatch) => {

  dispatch({type: USER_REGISTER_REQUEST, payload: {username, password}});
  try{
    const { data } = await axios.post('/api/users/signin', {username, password});
    dispatch({type: USER_REGISTER_SUCCESS, payload: data});
    console.log("User sign in success");
    // set userInfo in cookie later
  } catch(error){
    dispatch({type: USER_REGISTER_FAILURE, payload: error.message});
  }

}