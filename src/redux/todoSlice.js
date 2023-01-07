//imports
import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

//setting the initial state
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: v4(), label: "MAKE A TO-DO LIST!  " },

    ],
    inputTaskValue: "",
    selectedEditTask: undefined
  },


  // reducers
  reducers: {

    // functiomn to add new task abd rest form
    addTask: (state) => {
      const newTask = {
        id: v4(),
        label: state.inputTaskValue
      };
      if (state.inputTaskValue.length) {
        state.todos.push(newTask);
      }
      state.inputTaskValue = "";
    },

    //function to mark a completed task 
    completeTask: (state, action) => {
      const idxTask = state.todos.findIndex(
        (task) => task.id === action.payload
      );
      state.todos.splice(idxTask, 1);
      // state.todos.filter((task, i) => i !== action.payload);
    },

    // function to delete a task
    deleteTask: (state, action) => {
      const idxTask = state.todos.findIndex(
        (task) => task.id === action.payload
      );
      state.todos.splice(idxTask, 1);
      // state.todos.filter((task, i) => i !== action.payload);
    },

    // function to select task to edit
    editTask: (state, action) => {
      const currentTask = {
        id: action.payload.id,
        label: action.payload.label
      };
      state.inputTaskValue = currentTask.label;
      state.selectedEditTask = currentTask;
     //state.todos.splice(state.inputTaskValue, 1);
    },

    //function  to replace selected task
    replaceTask:(state, action) =>{
      const idxTask = state.todos.findIndex(
        (task) => task.id === action.payload
      );
      const reTask = {
        id: v4(),
        label: state.inputTaskValue
      };
      if (state.inputTaskValue.length) {
        state.todos.splice(idxTask, 1);
        state.todos.push(reTask);
      }
      state.inputTaskValue = "";
    },

    //function to update list from input
    updateValue: (state, action) => {
      state.inputTaskValue = action.payload;
      }
    



   

  }



  
  
});

export const {
  addTask,
  deleteTask,
  updateValue,
  editTask,
  editAddTask,
  completeTask,
  replaceTask
} = todoSlice.actions;



export default todoSlice.reducer;

