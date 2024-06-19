import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
})



// Steps for implementation :-

// 1st step is to make a store from {configure store}
// 2nd step is to make Slice file as in reducers by importing create slice
// Then make a initial state with object type.
// Now make the desired slice variable by {create slice} by inputing - name, initial state and reducers
// Now add fucntionalities to reducers..take a look at todoslice.js file and also define them.
// Now export all the functions made inside the reducers to use in components by using variable.actions property
// Also export the slice variable reducers to use in store.js section
// Now add the  main reducer in the store by reference.



// This is how a action looks like :- 

// const action = {
//     type: 'updateTodo',
//     payload: {
//         id: '12345',
//         text: 'Updated Todo Text'
//     }
// };

// Note : Now u dont need to write the inside code as its automatically done uder the hood ..just give the arguments it will do it itself 