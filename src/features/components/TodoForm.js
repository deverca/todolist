import {useState} from 'react';
import "../styles/TodoForm.css";
import {useDispatch} from "react-redux";
import {AddTodo} from "../reducers/todosSlice";


function TodoForm() {

 const [text, setText] = useState("");

 const dispatch = useDispatch();

function changeHandler(event){

setText(event.target.value);

}

function addHandler(){
    console.log("A new task has been added:", text);
    dispatch(AddTodo(text));
    setText("");

}


    return (
        <div className="TodoForm">
            <input type="text" placeholder="Add a new task." value={text}
            onChange={changeHandler}
            
            />
            <button
            onClick={addHandler}>Add</button>
            
        </div>
    )
}

export default TodoForm
