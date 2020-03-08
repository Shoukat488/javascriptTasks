

const TodoActions = {
    Add: (obj) => {
        console.log({ obj });
        return { type: 'ADD', payload: obj }
    },
    Update: (obj) => {
        return { type: 'UPDATE', payload: obj }
    },
    Delete: (id) => {
        return { type: 'DELETE', payload: id }
    },
    Edit: (obj) => {
        return { type: 'EDIT', payload: obj }
    },
    setData:(data)=>{
        return {type:'SETDATA',payload:data}
    }
}

export default TodoActions 