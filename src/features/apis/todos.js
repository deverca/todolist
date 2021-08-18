import api from "../apis/index";

export const getTodos = ()=>{
return api.get("/todos");
}

export const addToDo = (text) =>{
return api.post("/todos",{text})
}

export const updateToDo =  (id,updateToDo) =>{
    return api.put(`/todos/${id}`, updateToDo)
}

export const deleteToDo = (id) =>{
    return api.delete(`/todos/${id}`)
}