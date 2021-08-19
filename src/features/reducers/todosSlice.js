import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({


});

const todosSlice = createSlice(
    {
        name: "todos",
        initialState:initialState,
        reducers:{
                AddTodo(state, action){
               todosAdapter.addOne(state,action.payload)
                },
                ToggleTodo(state,action){
                  const todo = state.entities[action.payload];
                  todo.done =!todo.done;

                  },
                  UpdateTodoText(state,action){
                    todosAdapter.updateOne(state, {
                      id: action.payload.id,
                      changes: action.payload.updateToDo
                  })



                },

                AddTodos(state,action){
                todosAdapter.addMany(state,action.payload);
                },
                  RemoveTodo(state, action){
                 todosAdapter.removeOne(state,action.payload);

                  }

                }
            });

export default todosSlice.reducer;

export const {AddTodo, ToggleTodo,RemoveTodo, AddTodos,UpdateTodoText} = todosSlice.actions;

export const {selectAll: selectTodos,selectIds: selectTodoIds, selectById: selectTodoById, selectEntities: selectEntities } = todosAdapter.getSelectors((state) => state.todoList );

export const selectDoneList = createSelector([selectTodos],(todos) =>{
    return todos.filter((todo) => todo.done);
});
