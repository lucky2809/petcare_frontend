export const ADD_PET_DETAILS = "ADD_PET_DETAILS"
export const ADD_OWNER_DETAILS = "ADD_OWNER_DETAILS"
export const ADD_BOARDING_DETAILS = "ADD_BOARDING_DETAILS"

 
export const setPetDetails = (payload) => {
    return{
        type: ADD_PET_DETAILS,
        payload
    }
}

export const setOwnerDetails = (payload) => {
    return{
        type: ADD_OWNER_DETAILS,
        payload
    }
}

export const setBoardingDetails = (payload) => {
    return{
        type: ADD_BOARDING_DETAILS,
        payload
    }
}
