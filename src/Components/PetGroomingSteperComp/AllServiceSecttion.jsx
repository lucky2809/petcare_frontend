import { Box, duration, } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import ServiceCard from './ServiceCard'
import { AnimatedCard } from '../StyledComponents/Styled'


function AllServiceSection({handleNext}) {

    const data = [
        {
            "icone": `${import.meta.env.BASE_URL}spa bath.avif`,
            "heading": "Spa Bath",
            "price": 899
        },
        {
           "icone": `${import.meta.env.BASE_URL}spa bath.avif`,
            "heading": "Advanced Grooming",
            "price": 1299
        },
        {
           "icone": `${import.meta.env.BASE_URL}spa bath.avif`,
            "heading": "Full Service-Master Touch",
            "price": 1499
        }
    ];



    return (
        <Fragment>

            <AnimatedCard className='service  w-full my-5 flex flex-col justify-center h-full gap-4 items-center'>
                <h1 className='heading text-3xl font-bold w-96'>Service Section</h1>
                {
                    data.map((item_data, index) => <ServiceCard item_data={item_data} index={index}  handleNext={handleNext}/>)
                }
              
            </AnimatedCard>
        </Fragment>
    )
}

export default AllServiceSection