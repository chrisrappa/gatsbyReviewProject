import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { userSigninReducer, userRegisterReducer } from './src/reducers/userReducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {};

const reducers = combineReducers(
  userRegisterReducer,
  userSigninReducer
)



const wrapWithProvider = ({ element }) => {

  const storeEnhancer = (reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

  const store = createStore(storeEnhancer);
  return <Provider store={store}>{element}</Provider>
}

export default wrapWithProvider;