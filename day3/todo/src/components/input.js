import React, { useState, useEffect } from 'react';
import NoteServices from '../services/service';
import { Link } from 'react-router-dom';

const Input = (props) => {
    const [task, setTask] = useState('');
    const [note, setNote] = useState('');
    const [index, setIndex] = useState(null)
    const [isEditing, setIsEditing] = useState(false);
    const [todo, setTodo] = useState([])
    useEffect(() => {
        console.log("did mount")
        const todo = NoteServices.getData;
        let locaTask = task;
        let locaNote = note;
        if (props.history.location.state) {
            console.log("edited")
            const key = props.history.location.state.index

            const item = todo[key];
            locaNote = item.note;
            locaTask = item.task;
            setIndex(index)
            setIsEditing(true)
        }
        setNote(locaNote);
        setTask(locaTask)
        setTodo(todo)
    },[])
    const add = () => {
        if (task.length && note.length) {
            console.log("task: ", task)
            console.log("note: ", note)

            let newData = {
                task, note,
                time: new Date()
            }
            let newTodo = [];
            if (isEditing) {
                newTodo = [...todo]
                newTodo[index] = newData
            }
            else
                newTodo = [
                    ...todo,
                    newData
                ]

            NoteServices.setData = newTodo
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
            <Link to='/'>
            <button>Back</button>
            </Link>
            
        </div >
    );
}


export default Input;