import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import NoteServices from '../services/service';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return { todo: state.Todo.todo }
}

const List = (props) => {

    const [todo, setTodo] = useState([])
    const [todo2, setTodo2] = useState([]);
    const [isSelected, setSelecting] = useState(false)
    const [isSorted, setIsSorted] = useState(false)
    const [rowData , setRowData] = useState(null)
    useEffect(() => {
        console.log("props: ",props)
        // setTodo(props.todo ? props.todo : [])
        const locaTodo = props.todo;

        let data = [];
        if (isSelected)
            data = todo2 ? todo2 : []
        else
            data = locaTodo ? locaTodo : []
            // let rows = []
        let rows = data.map((item, key) => {
            return (
                <tr key={key}>
                    <td >{item.task} </td>
                    <td >
                        {item.note}
                    </td>
                    <td>
                        {item.time.toString()}
                    </td>
                    <td>
                        <button onClick={() => { edit(key) }}>
                            Edit
            </button>
                    </td>
                    <td>
                        <button onClick={() => { remove(key) }}>
                            Remove
              </button>
                    </td>
                    <td />
                </tr>
            )

        })
        console.log("todo : ",locaTodo)
        setRowData(rows)
        setTodo(locaTodo)
    }, [])

    const sortByName = () => {
        // let tasks = []
        for (let i = 0; i < todo.length - 1; i++) {
            for (let j = 0; j < todo.length - i - 1; j++) {
                if (todo[j].task > todo[j + 1].task) {
                    console.log(todo[j].task, todo[j + 1].task)
                    let temp = todo[j];
                    todo[j] = todo[j + 1];
                    todo[j + 1] = temp;
                }
            }
        }
        let newTodo = [...todo];
        props.setTodo(newTodo)
        setIsSorted(true)
    }
    const sortByDate = () => {
        for (let i = 0; i < todo.length - 1; i++) {
            for (let j = 0; j < todo.length - i - 1; j++) {
                if (todo[j].time < todo[j + 1].time) {
                    console.log(todo[j].time, todo[j + 1].time)
                    let temp = todo[j];
                    todo[j] = todo[j + 1];
                    todo[j + 1] = temp;
                }
            }
        }
        let newTodo = [...todo];
        props.setTodo(newTodo)
        setIsSorted(true)
    }

    const edit = (key) => {
        console.log(key)
        props.history.push('/input', { index: key })
    }
    const remove = (key) => {
        console.log("key: ", key)
        let newTodo = todo.slice(key, key + 1);
        // const newTodo = todo;
        console.log({ newTodo })
        props.setTodo(newTodo)
    }

    const handleSelect = (event) => {
        console.log(event.target.value)
        const value = event.target.value;
        if (value == 'A')
            sortByName();
        else if (value == 'B')
            sortByDate()
    }
    const handleFilter = (event) => {
        let value = event.target.value
        let newData = []
        if (!value.length)
            setSelecting(false)
        else {
            setSelecting(true)
            newData = todo.filter((item) => item.task.includes(value));
            console.log("filtered data: ", newData);
        }
        setTodo2(newData);
    }
    const add = (newTodo) => {
        props.history.push("/input")
    }
    return (
        <Router className="App">
            <header style={{ background: 'grey' }}>
                <button style={{ height: 30, width: 50, background: 'green' }}>Home</button>
            </header>
            <input style={{ width: 300, height: 20, marginTop: 10, marginLeft: 10 }} onChange={handleFilter} placeholder="Filter" ></input>
            <select style={{ width: 100, height: 27, marginLeft: 5, background: 'purple', border: 0 }} onChange={handleSelect}>
                <option value="A"  >sort by alphabet</option>
                <option value="B" >sort by last date</option>
            </select>
            <button style={{ width: 100, height: 27, marginLeft: 5, background: 'green', border: 0 }} >Search</button>
            <table>
                <thead>
                    <tr >
                        <td>
                            Task
            </td>
                        <td>
                            Note
            </td>
                        <td>
                            Date
            </td>
                        <td>
                            Edit
            </td>
                        <td>
                            Delete
            </td>
                    </tr>
                </thead>
                <tbody>
                    {rowData}
                </tbody>
            </table>
            {/* <div style={{ borderWidth: 3 }}>
                Add items
          <Input update={update} todo={todo} addEvent={add} />
            </div> */}
            <button onClick={() => add()}>Add</button>
        </Router>
    );
}

export default connect(mapStateToProps)(List);