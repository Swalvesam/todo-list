import {useState} from "react";
import './App.css';

// import ViewTasks from './viewTasks';
import React from "react";

import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDo({ todo, index, completeTodo, handleToggle, removeTodo }) {
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   handleToggle(e.currentTarget.index)
  // }

  return (
    <div className="viewTasks" id="viewTasks" style={{textDecoration: todo.isCompleted ? "line-through" : ""}} >
      <input type="checkbox"  checked={todo.isCompleted} onChange={() => completeTodo(index)}/>
      {todo.task}
    
      <button id="removeButton" onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};



function TaskForm({ addTask }) {
  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
      e.preventDefault();
      addTask(value);
      setValue("");
  };

  return (
      <div id="addTask" className="addTaskList" >
      <form onSubmit={handleSubmit}>
          
          <input  size="fit-conatiner"type="text" onChange={e => setValue(e.target.value)} placeholder="new task" value={value} />
         
          <button id="addButton">Add</button>
      </form>
      </div>
  )
}




function App() {

  const [taskList, setTaskList] = useState([
    {
    id: 1,
    task: "clean room",
    isCompleted: false
    },
    {
    id: 2,
    task: "study",
    isCompleted: true,
    },
    {
    id: 3,
    task: "mow grass",
    isCompleted: false
    },
    {
    id: 4,
    task: "dishes",
    isCompleted: true
    }]);

  const addTask = text => {
    const newTask = [...taskList, {id: taskList.length + 1, task: text, complete: false}];
    setTaskList(newTask);
  }
  const completeTodo = index => {
    const completeTask = [...taskList];
    completeTask[index].isCompleted = true;
    setTaskList(completeTask);
  }

  const handleToggle = index => {
    const mapped = taskList.map( task => {
      return task.id === index ? {...taskList, isCompleted: !task.isCompleted} : {...taskList}
    })
    setTaskList(mapped);
  }

  const removeTodo = index => {
    const removeTask = [...taskList];
    removeTask.splice(index, 1);
    setTaskList(removeTask)
  }


  return (
    <div className="App">
      <header className="todo-list" >
      <Card style={{ width: '18rem' }}>
        <Card.Header as="h5">Todo List </Card.Header>
        <Card.Body>
        <TaskForm addTask={addTask}/>
       
       
        {taskList.map((todo, index) =>(
          <ToDo 
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          handleToggle={handleToggle}
          removeTodo={removeTodo}
          />
        ))}
        </Card.Body>
        </Card>
        
      </header>
    </div>
  );
}

export default App;
