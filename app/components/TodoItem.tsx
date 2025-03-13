import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'
import styles from "../../styles/Main.module.css"

const TodoItem = ({id, title, completed}: {id: number, title: string, completed: boolean}) => {
   const dispatch = useDispatch();

   const handleComplete = () => {
      dispatch(
        toggleComplete({id: id, completed: !completed})
      )
    }

   const handleDelete = () => {
      dispatch(
         deleteTodo({id: id})
      )
   }

  return (
   <li className={`${styles["list__item"]} ${styles[`${completed ? "list__item--completed": ""}`]}`}>
      <input type="checkbox" checked={completed} onChange={handleComplete}></input>
      {title}
      <button className={styles.todolist__button__delete} onClick={handleDelete}>Удалить</button>
   </li>
  )
}

export default TodoItem
