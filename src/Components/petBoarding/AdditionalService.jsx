import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { AnimatedCard } from '../StyledComponents/Styled'
import { Checkbox } from '@mui/material'
import { StepContext } from './BoardingStepper.'




function AddBoardingService() {
    const [hoverEffect, setHoverEffect] = useState(true)
    const [hoverEffectCat, setHoverEffectCat] = useState(true)

    const { handleNext, isPetGrooming, isPetTaxi, setIsPetGrooming, setIsPetTaxi } = useContext(StepContext)
    console.log("isPetGrooming, isPetTaxi", isPetGrooming, isPetTaxi, hoverEffect)
    const onMouse = () => {
        setHoverEffect(true)

    }
    const leaveMouse = () => {
        setHoverEffect(false)
    }

    const onMouseCat = () => {

        setHoverEffectCat(true)
    }
    const leaveMouseCat = () => {

        setHoverEffectCat(false)

    }

    const handleSelectTaxi = (e) => {
        setIsPetTaxi(e.target.checked)

    }

    const handleSelectGrooming = (e) => {
        setIsPetGrooming(e.target.checked)

    }



    return (
        <Fragment>

            <AnimatedCard className='service w-full my-5 flex flex-col justify-center max-sm:items-start h-full gap-4 items-center '>
                <h1 className='heading text-2xl font-bold flex gap-1'>Service Section </h1>

                <div
                    onMouseOver={onMouse} onMouseLeave={leaveMouse}
                    className={`Service border  shadow-sm shadow-black/15 ${isPetGrooming ? "bg-amber-50/20 border-amber-400" : "border-black/20"}  p-2 rounded-md flex  items-center gap-5 w-96 max-sm:w-full `}>
                    <div className='img-section '>
                        <Icon fontSize={35} icon={"streamline-emojis:bathtub"} />
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className={`font-semibold text-[18px] ${hoverEffect ? "ml-2" : ""}   duration-700`}>For Pet Grooming</h1>
                        <p className='text-[12px] font-semibold text-slate-500'>
                            <Checkbox onChange={handleSelectGrooming} aria-label='Checkbox demo' sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={isPetGrooming} /></p>
                    </div>
                </div>

                <div
                
                    onMouseOver={onMouseCat} onMouseLeave={leaveMouseCat}
                    className={`Service border  shadow-sm shadow-black/15 ${isPetTaxi ? "bg-amber-50/20 border-amber-400" : "border-black/20"}  p-2 rounded-md flex  items-center gap-5 w-96 max-sm:w-full`}>
                    <div className='img-section '>
                        <Icon fontSize={35} icon={"noto-v1:taxi"} />
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div>
                        <h1 className={`font-semibold text-[18px] ${hoverEffectCat ? "ml-2 " : ""} duration-700 flex gap-3`}>For Pet Taxi <span className='text-gray-400 gap-3'>coming soon!</span></h1>
                        <p className=' text-red-600 text-sm'> * Taxi only available for cats</p>
                        </div>
                        <p className='text-[12px] font-semibold text-slate-500'>
                            <Checkbox disabled onChange={handleSelectTaxi} aria-label='Checkbox demo' sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={isPetTaxi} /></p>
                    </div>
                </div>

            </AnimatedCard>
        </Fragment>
    )
}

export default AddBoardingService