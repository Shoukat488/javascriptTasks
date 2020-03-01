import React from 'react';
import Actions from '../actions/actions';

const INITIAL_STATE = {
    token : ''
}
const Token=(state = INITIAL_STATE , action)=>{

    switch(action.type)
    {
        case Actions.setToken():

        return{
            ...state,
            token : action.token
        }

        default: return state
    }
}
export default Token;