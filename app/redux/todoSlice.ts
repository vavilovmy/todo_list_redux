import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
   id: number; 
   title: string; 
   completed: boolean
}

const initialState: Todo[] = [
   { id: 1, title: "Задача 1", completed: false},
   { id: 2, title: "Задача 2", completed: true},
   { id: 3, title: "Задача 3", completed: false}
]

const todoSlice = createSlice(
   {
      name: "todos",
      initialState,
      reducers: {
         addTodo: (state, action: PayloadAction<{ title: string }>) => {
            const newTodo: Todo = {
               id: Date.now(),
               title: action.payload.title,
               completed: false
            };
            state.push(newTodo);
         },
         toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
         },
         deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
         }
      }
   }
)

export const { 
   addTodo, 
   toggleComplete, 
   deleteTodo 
} = todoSlice.actions;

export default todoSlice.reducer;