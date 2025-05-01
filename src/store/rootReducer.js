import { combineReducers } from "@reduxjs/toolkit"
import  PetReducer  from "./petServices/reducer"



const rootReducer = combineReducers({      // to keep all reducers here
    PetReducer 
})

export default rootReducer