import {useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../styles/TodoForm.css";
import {getTodos} from "../apis/todos";
import {useSelector, useDispatch} from "react-redux";
import {AddTodos} from "../reducers/todosSlice";
import ConfettiGenerator from "confetti-js";
import {Progress} from "antd";

function TodoList() {

  
    const dispatch = useDispatch();
useEffect(()=>{

getTodos().then((response) =>{

    dispatch(AddTodos(response.data));
}

)
},[])


    return (
   
<div>
    <h1 className="todo-header"><b>What are your plans for today?</b></h1>

        <div className="TodoList">
            
            <TodoGroup></TodoGroup>
          
        </div>
        <div className="TodoForm">
              <TodoForm></TodoForm>
        </div></div>
    )
}

export default TodoList;
