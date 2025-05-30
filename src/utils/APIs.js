  export const addBookingData = async (payload) => {

    // const payload = {
    //   ...ownerFormData,
    //   boardingDetails: boardingFormData,
    //   petDetails: petFormData

    // }
    console.log(payload)

    
    try {
      const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/booking/bookingdetails`
      const fetchData = await fetch(URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const resp = await fetchData.json()
      alert(JSON.stringify(resp))
    } catch (err) {
      console.log("Incorect Details", err)
    }
  }