import React from 'react';
import Actions from '../actions/actions';

const INITIAL_STATE = {
    user : ''
}
const User=(state = INITIAL_STATE , action)=>{

    switch(action.type)
    {
        case Actions.setUser():

        return{
            ...state,
            user : action.user
        }

        default: return state
    }
}
export default User;