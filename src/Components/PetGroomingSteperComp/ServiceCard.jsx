import { Icon } from '@iconify/react/dist/iconify.js'
import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { setGroomingDetails } from '../../store/petServices/actions'
import { useDispatch, useSelector } from 'react-redux'

function ServiceCard({ index, item_data, handleNext }) {
    const dispatch = useDispatch()
    const groomingData = useSelector((state) => state.PetReducer.groomingDetails)

    const [hoverEffectCat, setHoverEffectCat] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    const onMouseCat = () => {

        setHoverEffectCat(true)
    }
    const leaveMouseCat = () => {

        setHoverEffectCat(false)

    }

    const handleSelectNormal = (e, data) => {
        dispatch(setGroomingDetails([...groomingData, { service: data.heading, price: data.price }]))

        setIsChecked(e.target.checked)

    }

    return (
        <div onClick={handleNext} key={index} onMouseOver={onMouseCat} onMouseLeave={leaveMouseCat} className={`Service border  shadow-sm shadow-black/15  ${isChecked ? "bg-amber-50/20 border-amber-400" : "border-black/20"}  p-2 rounded-md flex  items-center gap-5 w-[70%]  duration-700`}>
            <div className='img-section h-13 w-13 rounded-full'>
                {/* <Icon fontSize={35} icon={item_data.icone} /> */}
                <img className='object-contain h-full w-full rounded-full' src={item_data.icone} alt="" />
            </div>
            <div className='flex justify-between items-center w-full'>
                <h1 className={`font-semibold text-[18px] ${hoverEffectCat ? "ml-2 " : ""}  duration-700`}>{item_data.heading}</h1>
                <p className='text-[15px] font-semibold text-yellow-700'><span className='text-sl'>RS</span> {item_data.price}</p>
            </div>
            <p className='text-[12px] font-semibold text-slate-500'>
                <Checkbox onChange={(e) => handleSelectNormal(e, item_data)} aria-label='Checkbox demo' sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={isChecked} /></p>
        </div>
    )
}

export default ServiceCard