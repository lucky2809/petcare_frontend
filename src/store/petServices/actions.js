export const ADD_PET_DETAILS = "ADD_PET_DETAILS"
export const ADD_OWNER_DETAILS = "ADD_OWNER_DETAILS"
export const ADD_BOARDING_DETAILS = "ADD_BOARDING_DETAILS"
export const ADD_TAXI_DETAILS = "ADD_TAXI_DETAILS"
export const REMOVE_PET_DETAIL = "REMOVE_PET_DETAIL"
export const ADD_GROOMING_DETAILS = "ADD_GROOMING_DETAILS"
export const SET_ACTIVE_STEP = "SET_ACTIVE_STEP"
export const SET_TOGGLE_MODAL = "SET_TOGGLE_MODAL"
export const SET_PET_TYPE = "SET_PET_TYPE"

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
