import React from 'react';
import Actions from '../actions/actions';

const INITIAL_STATE = {
    combid : ''
}
const Combid=(state = INITIAL_STATE , action)=>{

    switch(action.type)
    {
        case Actions.setCombid():

        return{
            ...state,
            combid : action.combid
        }

        default: return state
    }
}
export default Combid;