import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { AnimatedCard } from '../StyledComponents/Styled'
import { StepContext } from './Stepper'




function ServiceSection({ }) {
    const [hoverEffect, setHoverEffect] = useState(false)
    const [hoverEffectCat, setHoverEffectCat] = useState(false)

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


    return (
        <Fragment>
            <AnimatedCard className='service  w-full my-5 flex flex-col justify-center h-full gap-4 items-center'>
                <h1 className='heading text-3xl font-bold w-96 flex gap-1'>Service Section<div className='text-green-600'> </div> </h1>
                <div onClick={handleNext} onMouseOver={onMouseCat} onMouseLeave={leaveMouseCat} className={`Service p-4 border border-black/20 shadow-sm shadow-black/15 ${hoverEffectCat ? "hover:bg-amber-50/20 hover:border-amber-400" : ""}  p-2 rounded-md flex  items-center gap-5 w-96`}>
                    <div className='img-section '>
                        <Icon fontSize={35} icon={"emojione-v1:cat-face"} />
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className={`font-semibold text-[18px] ${hoverEffectCat ? "ml-2 " : ""} duration-700`}>For Cat</h1>
                        <p className='text-[12px] font-semibold text-slate-500'>3 Service Avaible</p>
                    </div>
                </div>

                <div onClick={handleNext} onMouseOver={onMouse} onMouseLeave={leaveMouse} className={`Service p-4 border border-black/20 shadow-sm shadow-black/15 ${hoverEffect ? "hover:bg-amber-50/20 hover:border-amber-400" : ""}  p-2 rounded-md flex  items-center gap-5 w-96`}>
                    <div className='img-section '>
                        <Icon fontSize={35} icon={"fluent-emoji:dog-face"} />
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className={`font-semibold text-[18px] ${hoverEffect ? "ml-2" : ""}   duration-700`}>For Dog</h1>
                        <p className='text-[12px] font-semibold text-slate-500'>3 Service Avaible</p>
                    </div>
                </div>

            </AnimatedCard>
        </Fragment>
    )
}

export default ServiceSection