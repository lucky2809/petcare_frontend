export const ADD_PET_DETAILS = "ADD_PET_DETAILS"
export const ADD_PET_MEDITION_DETAILS = "ADD_PET_MEDITION_DETAILS"
export const ADD_PET_VACCINE_DETAILS = "ADD_PET_VACCINE_DETAILS"
export const ADD_PET_TREATMENT_DETAILS = "ADD_PET_TREATMENT_DETAILS"
export const ADD_OWNER_DETAILS = "ADD_OWNER_DETAILS"
export const ADD_BOARDING_DETAILS = "ADD_BOARDING_DETAILS"
export const ADD_TAXI_DETAILS = "ADD_TAXI_DETAILS"
export const REMOVE_PET_DETAIL = "REMOVE_PET_DETAIL"
export const REMOVE_PET_MEDITION_DETAIL = "REMOVE_PET_MEDITION_DETAIL"
export const REMOVE_PET_VACCINE_DETAIL = "REMOVE_PET_VACCINE_DETAIL"
export const ADD_GROOMING_DETAILS = "ADD_GROOMING_DETAILS"
export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP"
export const SET_TOGGLE_MODAL = "SET_TOGGLE_MODAL"
export const SET_PET_TYPE = "SET_PET_TYPE"
export const SET_BOOK_PRICE = "SET_BOOK_PRICE"
export const RESET_PET_STATE ="RESET_PET_STATE"
export const ADD_CART_ID = "ADD_CART_ID"
export const setBookPriceAction = (payload) => {
    return {
        type: SET_BOOK_PRICE,
        payload
    }
}

export const setPetType = (payload) => {
    return {
        type: SET_PET_TYPE,
        payload
    }
}

export const setPetDetails = (payload) => {
    return {
        type: ADD_PET_DETAILS,
        payload
    }
}
export const setPetMeditionDetails = (payload) => {
    return {
        type: ADD_PET_MEDITION_DETAILS,
        payload
    }
}
export const setPetVaccineDetails = (payload) => {
    return {
        type: ADD_PET_VACCINE_DETAILS,
        payload
    }
}
export const setTreatmentDetails = (payload) => {
    return {
        type: ADD_PET_TREATMENT_DETAILS,
        payload
    }
}
export const setOwnerDetails = (payload) => {
    return {
        type: ADD_OWNER_DETAILS,
        payload
    }
}

export const setBoardingDetails = (payload) => {
    return {
        type: ADD_BOARDING_DETAILS,
        payload
    }
}

export const setTaxiDetails = (payload) => {
    return {
        type: ADD_TAXI_DETAILS,
        payload
    }
}

export const handleRemovePet = (index) => {
    return { type: REMOVE_PET_DETAIL, payload: index };
};

export const handleRemovePetMedition = (index) => {
    return { type: REMOVE_PET_MEDITION_DETAIL, payload: index };
};
export const handleRemovePetVaccine = (index) => {
    return { type: REMOVE_PET_VACCINE_DETAIL, payload: index };
};

export const setActiveStepAction = (payload) => {
    return {
        type: SET_ACTIVE_STEP,
        payload
    }
}

export const handleToggleModal = (payload) => {
    return {
        type: SET_TOGGLE_MODAL,
        payload
    }
}

export const setGroomingDetails = (payload) => {
    return {
        type: ADD_GROOMING_DETAILS,
        payload
    }
}

export const resetWholeBooking = (payload) => {
    return {
        type: RESET_PET_STATE,
        payload
    }
}
