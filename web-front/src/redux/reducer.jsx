import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTaskReducer = createSlice({
  name: "tasks",
  
  initialState,
  
  reducers: {
    //Adding task
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },

    //remove task
    removeTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    //update task
    updateTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            item: action.payload.item,
          };
        }
        return task;
      });
    },

    // completed
    completeTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
    },
  },
  
});

export const {
  addTask,
  removeTask,
  updateTask,
  completeTask,
} = addTaskReducer.actions;
export const reducer = addTaskReducer.reducer;
