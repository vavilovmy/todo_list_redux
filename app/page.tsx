"use client"

import styles from "../styles/Main.module.css";
import { useDispatch } from "react-redux";
import { addTodo, toggleComplete } from "./redux/todoSlice";
import { useState } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./redux/store";
import TodoItem from "./components/TodoItem";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function Home() {

  type Todo = {id: number; title: string; completed: boolean}

  const todos: Todo[] = useAppSelector((state) => state.todos)

  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo({title: value}))
  };



  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main__todolist}>
          <h1>Мой список дел</h1>
          <form onSubmit={onSubmit}>
          <input 
            type="text" 
            id="todo_add" 
            placeholder="Добавить задачу..."
            value={value}
			    	onChange={(event) => setValue(event.target.value)}
            ></input>
          <button type="submit" className={styles.todolist__button__add}>Добавить</button>
          </form>
          <ul>
            {todos.map((task) => (
              <TodoItem key={task.id} id={task.id} title={task.title} completed={task.completed}/>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
