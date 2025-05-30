import { ADD_BOARDING_DETAILS, ADD_CART_ID, ADD_GROOMING_DETAILS, ADD_OWNER_DETAILS, ADD_PET_DETAILS, ADD_PET_MEDITION_DETAILS, ADD_PET_TREATMENT_DETAILS, ADD_PET_VACCINE_DETAILS, ADD_TAXI_DETAILS, REMOVE_PET_DETAIL, REMOVE_PET_MEDITION_DETAIL, REMOVE_PET_VACCINE_DETAIL, RESET_PET_STATE, SET_ACTIVE_STEP, SET_BOOK_PRICE, SET_PET_TYPE, SET_TOGGLE_MODAL } from "./actions"

const initialState = {
    cart_id: null,
    bookPrice: 0,
    petDetails: [{ pet_name: '', pet_age: null, pet_breed: null }],
    petMeditionDetails: [{ medication_name: '', description: '', dose_time: '', dosage: '' }],
    petVaccineDetails: [{ vaccine_name: '', year: null }],
    treatmentDetails: { spot_on_treatment_desc: "", neuter_or_spray: "" },
    boardingDetails: {},
    taxiDetails: {},
    ownerDetails: {},
    groomingDetails: [],
    activeStep: 0,
    isOpen: false,
    pet_type: "cat"

}

const PetReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_BOOK_PRICE:
            return { ...state, ...{ bookPrice: action.payload } }

        case ADD_CART_ID:

            return { ...state, ...{ cart_id: action.payload } }

        case ADD_PET_DETAILS:
            return { ...state, ...{ petDetails: action.payload } }

        case ADD_PET_MEDITION_DETAILS:
            return { ...state, ...{ petMeditionDetails: action.payload } }

        case ADD_PET_VACCINE_DETAILS:
            return { ...state, ...{ petVaccineDetails: action.payload } }

        case ADD_PET_TREATMENT_DETAILS:
            return { ...state, ...{ treatmentDetails: action.payload } }

        case REMOVE_PET_DETAIL:
            const updatedPetDetails = state.petDetails.filter(
                (_, i) => i !== action.payload
            );
            return { ...state, petDetails: updatedPetDetails };

        case REMOVE_PET_MEDITION_DETAIL:
            const updatedPetMeditionDetails = state.petMeditionDetails.filter(
                (_, i) => i !== action.payload
            );
            return { ...state, petMeditionDetails: updatedPetMeditionDetails };

        case REMOVE_PET_VACCINE_DETAIL:
            const updatedPetVaccineDetails = state.petVaccineDetails.filter(
                (_, i) => i !== action.payload
            );
            return { ...state, petVaccineDetails: updatedPetVaccineDetails };

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
            return { ...state, ...{ pet_type: action.payload } }

        // Reset to initialState
        case RESET_PET_STATE:
            return initialState;

        default:
            return state

    }

}


export default PetReducer