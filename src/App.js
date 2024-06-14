import React from 'react';

import { useState } from "react";
import deleteIcon from "./delete-svgrepo-com (5).svg"
import editIcon from "./pencil-svgrepo-com.svg"

import "./App.css";


function App() {
  const[input, setInput] = useState("");
  const[list, setList] = useState([]);
  const[uid, setUid] = useState();

  const handleInput = (e)=>{
    setInput(e.target.value)
  }

  const handleTask = (e)=>{
    setList([...list,input])
    setInput("")
  }
  const handleUpdate = (e)=>{
    list.splice(uid,1,input);
    setInput("")
  }
  const handleDelete = (i)=>{
    const filterList = list.filter((elm)=> elm !== list[i])
    console.log("filterList", filterList);
    setList(filterList)

  }

  const handleEdit = (i)=>{
    const filterList = list.filter((elm)=> elm === list[i])
    setInput(filterList[0])
    setUid(i)

  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="container">
        <div className='input-box'>
          <input type="text" value={input} onChange={(e)=>handleInput(e)} placeholder='Enter task'/> <button onClick={handleTask}>Add task</button>
          <button onClick={handleUpdate}>Update</button>
        </div>
        <div className="list">
          <ul>
            {list.map((item, i)=> <li key={i}  >{item} <img src={deleteIcon} className='dlt-icon' alt="delete" onClick={()=>handleDelete(i)} />
            <img src={editIcon} className='edit-icon' alt="edit" onClick={()=>handleEdit(i)} />
            
            </li>)}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
