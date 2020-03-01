import React from 'react';
import Actions from '../actions/actions';

const INITIAL_STATE = {
    todo : ''
}
const Todo=(state = INITIAL_STATE , action)=>{

    switch(action.type)
    {
        case Actions.setTodo():

        return{
            ...state,
            todo : action.todo
        }

        default: return state
    }
}
export default Todo;