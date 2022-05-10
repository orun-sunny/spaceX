const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];


const spaceSlice = createSlice({
    name :'space',
    initialState: [],
    reducers:{
        add(state,action) {
            // return [...state,action.payload]
            state.push(action.payload);

        },
        remove(state, action) {
           return state.filter((item) => item.id !== action.payload);
        },
        
    },


});
export const { add, remove } = spaceSlice.actions;
export default spaceSlice.reducer;