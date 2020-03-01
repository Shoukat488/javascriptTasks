import React from 'react';
import {combineReducers , createStore} from 'redux';
import Email from './reducers/email';
import Token from './reducers/token';
import User from './reducers/user';
import Friend from './reducers/friend';
import Combid from './reducers/combid';

const rootReducer = combineReducers({
    Email, Token , User , Friend , Combid
});

let store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

export default store;