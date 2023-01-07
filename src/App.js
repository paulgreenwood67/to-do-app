

import React, { Component }  from 'react';
import TodoList from "./components/TodoList";
import "./styles.css";

//function to show the header
export default function App() {
  return (
    <div className="App">
      <h1>To-do List</h1>
      <TodoList />
    </div>
  );
}


