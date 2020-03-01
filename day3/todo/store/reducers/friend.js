import React from 'react';
import Actions from '../actions/actions';

const INITIAL_STATE = {
    friend : ''
}
const Friend=(state = INITIAL_STATE , action)=>{

    switch(action.type)
    {
        case Actions.setFriend():

        return{
            ...state,
            friend : action.friend
        }

        default: return state
    }
}
export default Friend;