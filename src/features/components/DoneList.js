import React from 'react';
import { selectDoneList } from '../reducers/todosSlice';
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux';
import "../styles/TodoForm.css";

function DoneList() {
    const doneList= useSelector(selectDoneList);
    return (

<div>

          <h1 className="todo-header"><b>You did great!</b></h1>
        <div className="TodoList">
   {
   
    doneList.map(todo =>(
        <TodoItem key={todo.id} itemId={todo.id}/>


    ))
   
   }
       </div>
       </div>
      
    
    )
}

export default DoneList;
