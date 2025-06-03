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


export function getNumberOfDays(start_date, end_date) {
    const start = new Date(start_date);
    const end = new Date(end_date);
    if (start > end) {
        throw new Error("Start date cannot be after end date");
    }
    // Calculate difference in milliseconds
    const diffTime = end - start;

    // Convert to days and add 1 to make it inclusive
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    return diffDays;
}