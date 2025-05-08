import { BorderAllRounded } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { Fragment } from 'react'
import { AnimatedCard } from '../StyledComponents/Styled'
import { useDispatch, useSelector } from 'react-redux';
import { setPetDetails } from '../../store/petServices/actions';


export default function Additional() {

    const petFormData = useSelector((state) => state.PetReducer.petDetails)
    const dispatch = useDispatch()

    const selectOptions = [
        { label: "Indian Billi" },
        { label: "Spotted Cat" },
        { label: "Rusty-Spotted Cat" },

    ]

    const ageOfPet = [
        { label: "3 month - 6 month" },
        { label: "6 month - 1 year" },
        { label: "1 year - 2 year" },
        { label: "2 year - 3 year" },
        { label: "More than - 3 year" },
    ]

    

    const handlePetDetailsChange = (e, val, key) => {
            const { name, value } = e.target
            console.log("{ name, value }", { name, value , key, val})
            if(key) {
                dispatch(setPetDetails({ ...petFormData, ...{ [key]: val.label } }))
    
            } else {
                dispatch(setPetDetails({ ...petFormData, ...{ [name]: value } }))
    
            }
        }

    return (
        <Fragment>

            <AnimatedCard className='service  w-full my-5 flex flex-col justify-center h-full gap-4 items-center  px-10'>
                <h1 className='heading text-3xl font-bold w-full'>Additional Info Required</h1>
                <form className='w-full flex flex-col gap-4'>
                    <div className='flex gap-2 w-full'>

                        <Autocomplete
                            disablePortal
                            required
                            // size="small" name="Size" 
                            options={selectOptions}
                            sx={{
                                width: "100%",
                                '& .Mui-focused.MuiAutocomplete-input': {
                                    color: "blue"
                                },
                            }}
                            value={petFormData.pet_breed} 
                            onChange={(e, val) => handlePetDetailsChange(e, val, "pet_breed")}
                            name="pet_breed"
                            renderInput={(params) => <TextField  {...params} label="Breed Of Your Pet" />}
                        />
                        <TextField value={petFormData.pet_name} onChange={handlePetDetailsChange} name="pet_name" id="outlined-basic" label="Name of your pet" variant="outlined" sx={{ width: "100%", }} />
                    </div>
                    <Autocomplete
                        disablePortal

                        options={ageOfPet}
                        color="success"

                        sx={{
                            outline: "success",
                            width: "100%",
                            '& .Mui-focused.MuiAutocomplete-input': {
                                color: "blue"
                            },
                        }}
                        value={petFormData.pet_age} 
                        onChange={(e, val) => handlePetDetailsChange(e, val, "pet_age")} 
                        name="pet_age"
                        renderInput={(params) => <TextField  {...params} label="Age Of Pet" />
                        }
                    />

                    <TextareaAutosize
                        minRows={3}
                        placeholder="Enter text here"
                        style={{ width: '100%', border: "1px solid #3b3a3a52", borderRadius: '2px', padding: "10px" }}
                    />

                </form>

            </AnimatedCard>

        </Fragment>
    )
}
