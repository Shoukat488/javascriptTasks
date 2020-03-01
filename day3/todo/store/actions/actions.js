import React from 'react';
import ActionTypes from './actionTypes';

const Actions={
    setEmail : ()=>ActionTypes.SETEMAIL,
    setToken : ()=>ActionTypes.SETTOKEN,
    setUser : ()=>ActionTypes.SETUSER,
    setFriend : ()=>ActionTypes.SETFRIEND,
    setCombid: ()=>ActionTypes.COMBID,
    setUsers: ()=>ActionTypes.SETUSERS
}
export default Actions;