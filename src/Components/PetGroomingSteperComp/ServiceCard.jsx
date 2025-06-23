import { Icon } from '@iconify/react/dist/iconify.js'
import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { setGroomingDetails } from '../../store/petServices/actions'
import { useDispatch, useSelector } from 'react-redux'

function ServiceCard({ index, item_data, handleNext }) {
    const dispatch = useDispatch()
    const groomingData = useSelector((state) => state.PetReducer.groomingDetails)

    const [hoverEffectCat, setHoverEffectCat] = useState(false)
    const [isChecked, setIsChecked] = useState(groomingData.map(g => g.service).includes(item_data.heading))

    const onMouseCat = () => {

        setHoverEffectCat(true)
    }
    const leaveMouseCat = () => {

        setHoverEffectCat(false)

    }

    const handleSelectNormal = (e, data) => {
        const checked = e.target.checked
        if (checked) {
            dispatch(setGroomingDetails([...groomingData, { service: data.heading, price: data.price }]))

        } else {

            dispatch(setGroomingDetails([...groomingData.filter(g => g.service !== data.heading)]))

        }

        setIsChecked(checked)

    }

    return (
        <div onClick={handleNext} key={index} onMouseOver={onMouseCat} onMouseLeave={leaveMouseCat} className={`Service border  shadow-sm shadow-black/15  ${isChecked ? "bg-amber-50/20 border-amber-400" : "border-black/20"}  p-2 rounded-md flex  items-center gap-5 w-[70%] max-sm:w-full  duration-700`}>
            <div className='img-section w-13 rounded-full'>
                {/* <Icon fontSize={35} icon={item_data.icone} /> */}
                <img className='object-contain h-full w-full rounded-full' src={item_data.icone} alt="" />
            </div>
            <div className='flex items-center justify-between w-full'>
                <h1 className={`font-semibold text-[18px] max-sm:text-[13px]  ${hoverEffectCat ? "ml-2 " : ""}  duration-700`}>{item_data.heading}</h1>
                <p className='text-[15px] max-sm:text-[11px] font-semibold text-yellow-700 text-center flex gap-1'><span className='text-sl'>RS</span> {item_data.price}</p>
            </div>
            <p className='text-[12px] font-semibold text-slate-500 '>
                <Checkbox onChange={(e) => handleSelectNormal(e, item_data)} aria-label='Checkbox demo' sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={isChecked} /></p>
        </div>
    )
}

export default ServiceCard