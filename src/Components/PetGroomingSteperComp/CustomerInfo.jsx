import React, { Fragment } from 'react'
import { AnimatedCard } from '../StyledComponents/Styled'
import { TextField } from '@mui/material'

function CustomerInfo() {
    return (
        <Fragment>
            <AnimatedCard className='service pb-4  w-full  flex flex-col justify-center h-full gap-4 items-center  px-10'>
                <h1 className='heading text-3xl font-bold w-full'>Customer Information</h1>
                <div className='w-full flex gap-3' >
                    <TextField id="outlined-basic" label="Fisrt name" variant="outlined" sx={{ width: "100%" }} />
                    <TextField id="outlined-basic" label="Last name" variant="outlined" sx={{ width: "100%" }} />
                </div>
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: "100%" }} />
                <TextField id="outlined-basic" label="Number" type='number' variant="outlined" sx={{ width: "100%" }} />
                <TextField id="outlined-basic" label="OTP" type='number' variant="outlined" sx={{ width: "100%" }} />
                <TextField id="outlined-basic" label="Full Address" variant="outlined" sx={{ width: "100%", }} size='medium' />

            </AnimatedCard>
        </Fragment>
    )
}

export default CustomerInfo;