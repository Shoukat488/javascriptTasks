import React, { useState } from 'react';

const Input = (props) => {
    const [task, setTask] = useState('');
    const [note, setNote] = useState('');
    const add = () => {
        if (task.length && note.length) {
            console.log("task: ", task)
            console.log("note: ", note)

            let newData = {
                task, note,
                time: new Date()
            }
            let newTodo = [];
            if (props.isUpdate) {
                newTodo = [...props.todo]
                newTodo[props.updateKey] = newData
            }
            else
                newTodo = [
                    ...props.todo,
                    newData
                ]
            console.log({ newTodo })
            setTask('')
            setNote('')
        }
    }
    return (
        <div>
            <input value={task} placeholder="Task" onChange={(event) => { setTask(event.target.value) }}>
            </input>
            <br />
            <input value={note} placeholder="Notes" onChange={(event) => { setNote(event.target.value) }} style={{ height: 100, marginTop: 10 }} width={12} height={30}>
            </input>
            <button onClick={() => add()}>Add</button>
        </div >
    );
}


export default Input;