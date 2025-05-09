import React, { Fragment } from 'react'
import { AnimatedCard } from '../StyledComponents/Styled'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setBoardingDetails, setOwnerDetails } from '../../store/petServices/actions'

function CustomerInfo({isPetTaxi}) {
        const ownerFormData = useSelector((state) => state.PetReducer.ownerDetails)
        const boardingFormData = useSelector((state) => state.PetReducer.boardingDetails)
        const dispatch = useDispatch()

        const handleOwnerDetailsChange = (e) => {
                const { name, value } = e.target
                console.log("{ name, value }", { name, value })
                dispatch(setOwnerDetails({ ...ownerFormData, ...{ [name]: value } }))
            }
            console.log("ownerFormData", ownerFormData)

        const handleBoardingDetailsChange = (e) => {
                const { name, value } = e.target
                console.log("{ name, value }", { name, value })
                dispatch(setBoardingDetails({ ...boardingFormData, ...{ [name]: value } }))
            }    
    
    return (
        <Fragment>
            <AnimatedCard className='service pb-4  w-full  flex flex-col justify-center h-full gap-4 items-center  px-10'>
                <h1 className='heading text-3xl font-bold w-full'>Customer Information</h1>
                <div className='w-full flex gap-3' >
                    <TextField id="outlined-basic" value={ownerFormData.first_name} onChange={handleOwnerDetailsChange} name='first_name' label="Fisrt name" variant="outlined" sx={{ width: "100%" }} />
                    <TextField id="outlined-basic" value={ownerFormData.last_name} onChange={handleOwnerDetailsChange} name='last_name' label="Last name" variant="outlined" sx={{ width: "100%" }} />
                </div>
                <TextField id="outlined-basic" value={ownerFormData.email} onChange={handleOwnerDetailsChange} name='email' label="Email" variant="outlined" sx={{ width: "100%" }} />
                <TextField id="outlined-basic" value={ownerFormData.phone_no} onChange={handleOwnerDetailsChange} name='number' label="Number" type='number' variant="outlined" sx={{ width: "100%" }} />
                {/* <TextField id="outlined-basic" label="OTP" type='number' variant="outlined" sx={{ width: "100%" }} /> */}
                <TextField id="outlined-basic" value={boardingFormData.from_address} onChange={handleBoardingDetailsChange} name='from_address' label="Full Address" variant="outlined" sx={{ width: "100%", }} size='medium' />

            </AnimatedCard>
        </Fragment>
    )
}

export default CustomerInfo;