import { createSlice } from "@reduxjs/toolkit";




const cartSlicer = createSlice({
    name:'productsInCart',
    initialState:[],
    reducers:{

        addToCart:(state,action)=>{//state is initial state
            if(state.length === 0) {
                state.push(action.payload);
            }
            else{
                if(state.find(p=>p.id === action.payload.id)){
                    state = state.filter(p=>p.id !== action.payload.id)
                }
                else{
                    state.push(action.payload)
                }
            }
            return state;
        },
        removeFromCart:(state,action)=>{
            return state.filter(p=> p.id !== action.payload.id)
        }
    }
})


export default cartSlicer.reducer;
export const { addToCart, removeFromCart } = cartSlicer.actions;