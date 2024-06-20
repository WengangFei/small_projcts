import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from './slicer'

const store = configureStore({
    reducer:{
        cart: cartSlicer
    }
})

export default store;