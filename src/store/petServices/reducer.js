import { ADD_BOARDING_DETAILS, ADD_OWNER_DETAILS, ADD_PET_DETAILS } from "./actions"



const initialState = {
    petDetails: [],
    boardingDetails: {},
    taxiDetails: {},
    ownerDetails: {}
}


 const PetReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PET_DETAILS:
            return { ...state, ...{ petDetails: action.payload } }

        case ADD_OWNER_DETAILS:
            return { ...state, ...{ ownerDetails: action.payload } }

        case ADD_BOARDING_DETAILS:
            return { ...state, ...{ boardingDetails: action.payload } }

        default:
            return state

    }

}


export default PetReducer