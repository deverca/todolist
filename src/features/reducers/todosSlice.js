import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids:["1","2"],
    entities:{
        1:{
            id: "1",
            text:"Wash the dishes.",
            done: false
        },
        2:{
            id: "2",
            text:"Water the plants.",
            done: false
        }
    }

});

const todosSlice = createSlice(
    {
        name: "todos",
        initialState:initialState,
        reducers:{
            AddTodo(state, action){
                todosAdapter.addOne(state,{
                    id:uuid(),
                    text:action.payload,
                    done:false
                });

            },
                ToggleTodo(state,action){
                    const todo = state.entities[action.payload];
                    todo.done = !todo.done;
               
                  },
                  RemoveTodo(state, action){
                 todosAdapter.removeOne(state,action.payload);

                  }

                }
            });

export default todosSlice.reducer;

export const {AddTodo, ToggleTodo,RemoveTodo} = todosSlice.actions;

export const {selectIds: selectTodoIds, selectById: selectTodoById } = todosAdapter.getSelectors((state) => state.todoList );