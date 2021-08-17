import React from 'react'
import {selectTodoById, ToggleTodo,RemoveTodo} from "../reducers/todosSlice";
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import "../styles/TodoItem.css";
function TodoItem(props) {
    const  todo = useSelector(state => selectTodoById(state, props.itemId))
   const dispatch = useDispatch();

function handleClick(){
    dispatch(ToggleTodo(props.itemId));
}
function handleDelete(event){
  dispatch(RemoveTodo(props.itemId))
  event.stopPropagation();

}
   

   const todoStatus = todo.done? "done":"";
    return (  
        <div className="item-container">
        <div className={`TodoItem-${todoStatus}`}  onClick={handleClick}>
            {todo.text}
            <button className="button" onClick={handleDelete}>X</button>
        </div>
        </div>
    )
}

export default TodoItem
