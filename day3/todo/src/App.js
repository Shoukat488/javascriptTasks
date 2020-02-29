import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';

function App() {

  const [update, setUpdate] = useState(false);
  const [elementKey, setKey] = useState(0);
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');
  const [note, setNote] = useState('');
  const [todo2, setTodo2] = useState([]);
  const [isSelected,setSelecting] = useState(false)
  let data;
  if(isSelected)
  data = todo2
  else
  data = todo

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
    setTodo(newTodo);
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
    setTodo(newTodo);
  }
  const edit = (key) => {
    console.log(key)
    setUpdate(true)
    setNote(todo[key].note)
    setTask(todo[key].task)
    setKey(key)
  }
  const remove = (key) => {
    console.log("key: ", key)
    let newTodo = todo.slice(key, key + 1);
    // const newTodo = todo;
    console.log({ newTodo })
    setTodo(newTodo)
  }
  const add = () => {
    if (task.length && note.length) {
      console.log("task: ", task)
      console.log("note: ", note)

      let newData = {
        task, note,
        time: new Date()
      } 
      let newTodo = [];
      if (update) {
        newTodo = [...todo]
        newTodo[elementKey] = newData
      }
      else
        newTodo = [
          ...todo,
          newData
        ]
      console.log({ newTodo })
      setTask('')
      setNote('')
      setTodo(newTodo)
    }
  }
  const handleSelect = (event) => {
    console.log(event.target.value)
    const value = event.target.value;
    if (value == 'A')
      sortByName();
    else if (value == 'B')
      sortByDate()
  }
  const handleFilter=(event)=>{
    let value = event.target.value
    let newData = []
    if(!value.length)
    setSelecting(false)
    else
    {
      setSelecting(true)
      newData = todo.filter((item)=>item.task.includes(value));
      console.log("filtered data: ",newData);
    }
    setTodo2(newData);
  }
  return (
    <div className="App">
      <header>
        <button>Home</button>
      </header>
      <input onChange={handleFilter} placeholder="Filter" ></input>
      <select onChange={handleSelect}>
        <option value="A"  >sort by alphabet</option>
        <option value="B" >sort by last date</option>
      </select>
      <button>Search</button>
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
          {rows}
        </tbody>
      </table>
      <div style={{ borderWidth: 3 }}>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          Add items
      </div>
        <input value={task} placeholder="Task" onChange={(event) => { setTask(event.target.value) }}>
        </input>
        <br />
        <input value={note} placeholder="Notes" onChange={(event) => { setNote(event.target.value) }} style={{ height: 100, marginTop: 10 }} width={12} height={30}>
        </input>
        <button onClick={() => add()}>Add</button>
      </div>

    </div>
  );
}

export default App;
