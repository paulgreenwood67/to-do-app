//This was a difficult task and I struggled. I used this (https://codesandbox.io/s/8lxwk?file=/src/styles.css:0-58) to help me get start and and some help from a fellow student, I did do parts of it on my own however . 


//Imports
import React from 'react'
import { useDispatch } from "react-redux";
import { useState} from "react"
import { deleteTask, editTask,} from "../redux/todoSlice";

//List component for input and delete, edit and completed buttons
const List = ({ id, label }) => {
  const [isComplete, setIsComplete ] = useState(true);
  const dispatch = useDispatch();

  const changeClass = (e) => {
    setIsComplete(current => !current)
  }
  return (
    <div className={isComplete ? "div" : "completed"}>
      <div
        style={{
          marginRight: "10px"
        }}
      >
    {label}
        
      </div>
      <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
      <button  onClick={() => dispatch(editTask({label, id }))}>Edit</button>
      <button className='button' onClick={changeClass}>Completed</button>
    </div>
  );
};

export default List;