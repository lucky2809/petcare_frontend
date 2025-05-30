import { combineReducers } from "@reduxjs/toolkit"
import  PetReducer  from "./petServices/reducer"
import cartReducer from "./slices/cartSlice"



const rootReducer = combineReducers({      // to keep all reducers here
    PetReducer,
    cart : cartReducer, 
})

export default rootReducer