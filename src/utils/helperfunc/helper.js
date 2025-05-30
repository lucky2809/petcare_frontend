export const isObjEmpty = (obj) => {
    if (!obj) {
        console.error("no object provided")
    } else {
        return Object.keys(obj).length <= 0
    }
}