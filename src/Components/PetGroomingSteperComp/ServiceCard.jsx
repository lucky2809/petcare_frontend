import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

function ServiceCard({ index, item_data, handleNext }) {
    const [hoverEffectCat, setHoverEffectCat] = useState(false)
    const onMouseCat = () => {

        setHoverEffectCat(true)
    }
    const leaveMouseCat = () => {

        setHoverEffectCat(false)

    }

    return (
        <div onClick={handleNext} key={index} onMouseOver={onMouseCat} onMouseLeave={leaveMouseCat} className={`Service border border-black/20 shadow-sm shadow-black/15  ${hoverEffectCat ? "hover:bg-amber-50/20 hover:border-amber-400" : ""}  p-2 rounded-md flex  items-center gap-5 w-96  duration-700`}>
            <div className='img-section h-13 w-13 rounded-full'>
                {/* <Icon fontSize={35} icon={item_data.icone} /> */}
                <img className='object-contain h-full w-full rounded-full' src={item_data.icone} alt="" />
            </div>
            <div className='flex justify-between items-center w-full'>
                <h1 className={`font-semibold text-[18px] ${hoverEffectCat ? "ml-2 " : ""}  duration-700`}>{item_data.heading}</h1>
                <p className='text-[15px] font-semibold text-yellow-700'><span className='text-sl'>RS</span> {item_data.price}</p>
            </div>
        </div>
    )
}

export default ServiceCard