import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../styles/TodoForm.css"

function TodoList() {
    return (
        <div className="TodoList">
            <h1>To-do List</h1>
            <TodoGroup></TodoGroup>
            <TodoForm></TodoForm>
        </div>
    )
}

export default TodoList;
