import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {     // Here state and action are by default parameters given- state means the current state and action means an object that describes the action to be performed, usually containing a type and a payload.

            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state , action) => {
            const todo = state.todos.find( (todo) => todo.id==action.payload.id )
            if (todo) {
                todo.text = action.payload.text 
            }
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer