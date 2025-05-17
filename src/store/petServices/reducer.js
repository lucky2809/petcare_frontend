import { ADD_BOARDING_DETAILS, ADD_GROOMING_DETAILS, ADD_OWNER_DETAILS, ADD_PET_DETAILS, ADD_TAXI_DETAILS, REMOVE_PET_DETAIL, SET_ACTIVE_STEP, SET_PET_TYPE, SET_TOGGLE_MODAL } from "./actions"

const initialState = {
    petDetails: [{ pet_name: '', pet_age: null, pet_breed: null }],
    boardingDetails: {},
    taxiDetails: {},
    ownerDetails: {},
    groomingDetails: { },
    activeStep: 0,
    isOpen: false,
    pet_type : "cat"

}

const PetReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PET_DETAILS:
            return { ...state, ...{ petDetails: action.payload } }

        case REMOVE_PET_DETAIL:
            const updatedPetDetails = state.petDetails.filter(
                (_, i) => i !== action.payload
            );
            return { ...state, petDetails: updatedPetDetails };

        case ADD_OWNER_DETAILS:
            return { ...state, ...{ ownerDetails: action.payload } }

        case ADD_BOARDING_DETAILS:
            return { ...state, ...{ boardingDetails: action.payload } }
        case ADD_TAXI_DETAILS:
            return { ...state, ...{ taxiDetails: action.payload } }
        case SET_ACTIVE_STEP:
            return { ...state, ...{ activeStep: action.payload } }
        case SET_TOGGLE_MODAL:
            return { ...state, ...{ isOpen: action.payload } }
        case ADD_GROOMING_DETAILS:
            return { ...state, ...{ groomingDetails: action.payload } }
        case SET_PET_TYPE:
            return { ...state, ...{pet_type: action.payload}}    

        default:
            return state

    }

}


export default PetReducer