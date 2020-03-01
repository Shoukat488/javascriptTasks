import React from 'react';
import Actions from '../actions/actions';

const INITIAL_STATE = {
    users : ''
}
const Users=(state = INITIAL_STATE , action)=>{

    switch(action.type)
    {
        case Actions.setUsers():

        return{
            ...state,
            users : action.users
        }

        default: return state
    }
}
export default Users;