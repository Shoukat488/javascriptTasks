import React from 'react';
import {combineReducers , createStore} from 'redux';
import Todo from './reducers/todo';

const rootReducer = combineReducers({
    Todo
});

let store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

export default store;