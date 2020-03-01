import React from 'react';
import Actions from '../actions/actions';

const INITIAL_STATE = {
    email : ''
}
const Email=(state = INITIAL_STATE , action)=>{

    switch(action.type)
    {
        case Actions.setEmail():

        return{
            ...state,
            email : action.email
        }

        default: return state
    }
}
export default Email;