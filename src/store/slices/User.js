import { createSlice } from '@reduxjs/toolkit'


const users = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){},
        deleteUsers(state,action){},
    }
});

export default users.reducer;
export const {addUser} = users.actions;



