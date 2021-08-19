import React from 'react'
import TodoItem from './TodoItem'
import { selectTodoIds } from '../reducers/todosSlice';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {AddTodos} from "../reducers/todosSlice";



function TodoGroup() {

    const dispatch = useDispatch();

    
    const todoIds = useSelector(selectTodoIds);
    
    return (
        <div>
         {todoIds.map((id)=>(
             <TodoItem key={id} itemId={id}/> )
         )}
         
        
   </div>
        
    )
}

export default TodoGroup
