import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { AnimatedCard } from '../StyledComponents/Styled'
import { StepContext } from './Stepper'
import { Checkbox } from '@mui/material'




function ServiceSection({ }) {
    const [hoverEffect, setHoverEffect] = useState(false)
    const [hoverEffectCat, setHoverEffectCat] = useState(false)
    const [isCat, setCat] = useState(true)
    const [isDog, setDog] = useState(true)


    // const { handleNext } = useContext(StepContext)
    const handleNext = () => { }
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


    const handleSelectCat = (e) => {
        setCat(e.target.checked)

    }

    const handleSelectDog = (e) => {
        setDog(e.target.checked)

    }

    return (
        <Fragment>
            <AnimatedCard className='service  w-full flex flex-col justify-center h-full gap-4 items-center'>
                <h1 className='heading text-3xl font-bold w-96 flex gap-1'>Service Section<div className='text-green-600'> </div> </h1>
                <div onMouseOver={onMouseCat} onMouseLeave={leaveMouseCat} className={`Service p-4 border  shadow-sm shadow-black/15 ${isCat ? "bg-amber-50/20 border-amber-400" : "border-black/20"}  p-2 rounded-md flex  items-center gap-5 w-96`}>
                    <div className='img-section '>
                        <Icon fontSize={35} icon={"emojione-v1:cat-face"} />
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className={`font-semibold text-[18px] ${hoverEffectCat ? "ml-2 " : ""} duration-700`}>For Cat</h1>
                        <p className='text-[12px] font-semibold text-slate-500'>3 Service Avaible</p>
                    </div>
                    <p className='text-[12px] font-semibold text-slate-500'>
                    <Checkbox onChange={handleSelectCat} aria-label='Checkbox demo' sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={isCat} /></p>

            </div>

            <div onMouseOver={onMouse} onMouseLeave={leaveMouse} className={`Service p-4 border shadow-sm shadow-black/15 ${isDog ? "bg-amber-50/20 border-amber-400" : "border-black/20"}  p-2 rounded-md flex  items-center gap-5 w-96`}>
                <div className='img-section '>
                    <Icon fontSize={35} icon={"fluent-emoji:dog-face"} />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <h1 className={`font-semibold text-[18px] ${hoverEffect ? "ml-2" : ""}   duration-700`}>For Dog</h1>
                    <p className='text-[12px] font-semibold text-slate-500'>3 Service Avaible</p>
                </div>
                <p className='text-[12px] font-semibold text-slate-500'>
                <Checkbox onChange={handleSelectDog} aria-label='Checkbox demo' sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={isDog} /></p>
        </div>

            </AnimatedCard >
        </Fragment >
    )
}

export default ServiceSection