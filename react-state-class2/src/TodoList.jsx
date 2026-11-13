import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoList() {
  let [todos , setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
  let [newTodo,setNewTodo]=useState("");

  let addNewTask = ()=>{
    setTodos((prevTodos)=>{
      return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
    });
    setNewTodo("");
  }

 let markAllDone = () => {
  setTodos((prevTodo) => {
    return prevTodo.map((todo) => {
      return {
        ...todo,
        isDone:true
      };
    });
  });
};

let markAsDone = (id) => {
  setTodos((prevTodo) =>
    prevTodo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone:true
        };
      }
      return todo;
    })
  );
};


  let updateTodoValue= (event) =>{
    setNewTodo(event.target.value)
  }

 let deleteTodo = (id) => {
  setTodos((preTodo) =>
    preTodo.filter((todo) => todo.id !== id)
  );
};

  return (
    <div>
      <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}>
      </input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>

      <hr></hr>
      <h4>Task Todo</h4>
      <ul>
        {
          todos.map((todo)=>(
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>

            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            <button onClick={()=>markAsDone (todo.id)}>markAs Done</button>
            </li>
          ))}
      </ul>
      <br></br>
      <br></br>
      <button onClick={markAllDone}>MarkAll  Done</button>
    </div>

  );
};