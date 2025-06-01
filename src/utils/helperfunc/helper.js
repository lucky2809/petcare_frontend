export const isObjEmpty = (obj) => {
    if (!obj) {
        console.error("no object provided")
    } else {
        return Object.keys(obj).length <= 0
    }
}

export const getPetLength = (array = []) => {

    return array.map(p => p.pet_name).filter(Boolean).length
}