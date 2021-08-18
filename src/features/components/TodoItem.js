import React from 'react'
import {selectTodoById, ToggleTodo,RemoveTodo} from "../reducers/todosSlice";
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import "../styles/TodoItem.css";
import {updateToDo, deleteToDo} from "../apis/todos";
function TodoItem(props) {
    const  todo = useSelector(state => selectTodoById(state, props.itemId))
   const dispatch = useDispatch();

const handleClick = (event)=>{
    updateToDo(props.itemId,{done: !todo.done}).then(()=>{
        dispatch(ToggleTodo(props.itemId));
});}


function handleDelete(event){

  deleteToDo(props.itemId).then(()=>{
        dispatch(RemoveTodo(props.itemId));
      
  });
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

export default TodoItem;
