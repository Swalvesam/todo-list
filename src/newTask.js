import {useState} from "react";
// import { Card } from 'react-bootstrap';
import './App.css';
import TASKS from "./TASKS";



const Task = () => {
    const [value, setValue] = useState("");
  
    const addTask = (value) => {
        const newTask = [...TASKS, {id: TASKS.length + 1, task: value, completed: false}];
        setValue(newTask);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(value);
        setValue("");
    }

    return (
        <div id="addTask" className="addTaskList" >
        <form onSubmit={handleSubmit}>
            
            <input size="70" type="text" onChange={e => setValue(e.target.value)} placeholder="new task" value={value} />
           
            <button id="addButton">Add</button>
        </form>
        </div>
    )
}


export default Task;