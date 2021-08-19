import {useState} from 'react';
import {useDispatch} from "react-redux";
import {addToDo} from '../apis/todos';
import {AddTodo} from "../reducers/todosSlice";
import "../styles/TodoForm.css"
import {Button, Input} from 'antd';

function TodoForm() {

 const [text, setText] = useState("");

 const dispatch = useDispatch();

function changeHandler(event){setText(event.target.value);}

function addTodoItem (){

addToDo(text).then((response)=>{
dispatch(AddTodo(response.data));
setText("");
});


}

    return (
        <div className="home">
            <input type="text" className="input" placeholder="Add a new task." value={text}
            onChange={changeHandler}
            
            />
            <button type="primary" className="button-add" 
            onClick={addTodoItem}>Add</button>
            
        </div>
    )
}

export default TodoForm
