import {useState} from 'react'
import {selectTodoById, ToggleTodo,RemoveTodo, UpdateTodoText} from "../reducers/todosSlice";
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import "../styles/TodoItem.css";
import {updateToDo, deleteToDo} from "../apis/todos";
import { Modal,Input } from 'antd';

function TodoItem(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const  todo = useSelector(state => selectTodoById(state, props.itemId))
   const dispatch = useDispatch();
   const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOk = () => {
    setIsModalVisible(false);
    if(document.getElementById("newValue").value!==""){
        updateToDo(props.itemId,{text:document.getElementById("newValue").value }).then(response=>{
            dispatch(UpdateTodoText({id:props.itemId, updateToDo:response.data}));
    });
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };


const handleClick = (event)=>{
    updateToDo(props.itemId,{done: !todo.done}).then(()=>{
   dispatch(ToggleTodo(props.itemId));
       event.stopPropagation();
});
 
}


function handleDelete(event){
  deleteToDo(props.itemId).then(()=>{
        dispatch(RemoveTodo(props.itemId));
      
  });
  event.stopPropagation();
  

}
const handleEdit = (event)=>{}

 const todoStatus = todo.done? "done":"";
 const editButtonClass =todo.done?`TodoItem-${todoStatus}-button`:`TodoItem-button`;
 
    return (  
        
        <div className="item-container">
        <div className={`TodoItem-${todoStatus}`}  onClick={handleClick}>
             {todo.text}
          
      <button className="button" onClick={handleDelete}>X</button>
        </div>
         <button  className={editButtonClass} onClick={showModal}>edit</button>     
        <Modal title="Edit your item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input type="text"id="newValue" defaultValue={todo.text}></Input>
    
      </Modal>
              
       
        </div>
    )
}

export default TodoItem;
