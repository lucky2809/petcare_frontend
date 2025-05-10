import { BorderAllRounded } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { Fragment } from 'react'
import { AnimatedCard } from '../StyledComponents/Styled'
import { useDispatch, useSelector } from 'react-redux';
import { setPetDetails } from '../../store/petServices/actions';
import PetDetails from '../FormComp/PetDetails';


export default function Additional() {
    const activeStep = useSelector((state) => state.PetReducer.activeStep)

    return (
        <Fragment>

            <AnimatedCard className={`service  w-full my-5 flex flex-col ${[1, 3].includes(activeStep) ? "justify-start" : "justify-center"} h-full gap-4 items-center  px-10`}>
                <h1 className='heading text-3xl font-bold w-full'>Additional Info Required</h1>
                <form className='w-full flex flex-col gap-4'>
                    <PetDetails />
                </form>

            </AnimatedCard>

        </Fragment>
    )
}
