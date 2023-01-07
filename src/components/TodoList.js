
// imports
import React from 'react'
import { useSelector, useDispatch, useRef } from "react-redux";
import { updateValue, addTask, editTask, replaceTask } from "../redux/todoSlice";
import List from "./List";


// Componant to manage user input and the Add and Update button
const TodoList = () => {
  const value = useSelector((state) => state.todo.inputTaskValue);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateValue(e.target.value));
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(addTask());
    }
  
    }      
  const handleKeyEnter2 = (e) => {
    if (e.key === "Enter") {
      dispatch(editTask());
        }
};
    
  return (
    <>
      <input
        type="text" 
        placeholder="Enter task"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyEnter}
      />
      <button onClick={() => dispatch(addTask())}>Add</button>
  
     
      <button  onKeyDown={handleKeyEnter2}  onClick={() => dispatch(replaceTask())}>Update</button>
          
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px"
        }}
      >
        {todos.length ? (
          todos.map((todo) => <List key={todo.id} {...todo} />)
        ) : (
          <h3>No to-dos...</h3>
        )}
      </div>
    </>
  );
};

export default TodoList;