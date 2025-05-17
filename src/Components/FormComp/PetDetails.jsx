import React, { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_PET_DETAILS, handleRemovePet } from '../../store/petServices/actions';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Autocomplete, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';




const Age = [
    { label: '3 - 6 Months' },
    { label: '6 Months - 1 Year' },
    { label: '1 Year - 2 Year' },
    { label: '2 Year - 3 Year' },
    { label: '3 Year - 4 Year' },
    { label: 'More Than 4 Year' },
]
// const PetType = [
//     { label: 'Cat' },
//     { label: 'Dog' }
// ]
const selectOptions = [
    { label: "Indian Billi" },
    { label: "Spotted Cat" },
    { label: "Rusty-Spotted Cat" },

]

function PetDetails() {

    const petForms = useSelector((state) => state.PetReducer.petDetails)
    const dispatch = useDispatch()


    const handlePetDetailsChange = (index, e, val, key) => {
        let updatedPets = [...petForms];
        const updatedPet = { ...updatedPets[index] }; // ✅ clone the specific object

        if (key) {
            updatedPet[key] = val?.label || '';
        } else {
            const { name, value } = e.target;
            updatedPet[name] = value;
        }

        updatedPets[index] = updatedPet;
        dispatch({ type: ADD_PET_DETAILS, payload: updatedPets });
    };

    console.log("petFormData", petForms)
    const handleAddPet = () => {
        if (petForms.length >= 4) {
            toast.error("Pet Limit Reached")
            return
        }
        const newPet = { pet_name: '', pet_age: null, pet_type: '', pet_breed: null };
        dispatch({ type: ADD_PET_DETAILS, payload: [...petForms, newPet] });
    };


    return (
        <Fragment>
            <div>
                {/* <div className='px-5 justify-between w-full flex flex-col gap-5'>
                                        <div className='flex gap-5'>
                                            <div>
                                                <TextField sx={{
        
                                                }} value={petFormData.pet_name} onChange={handlePetDetailsChange} name="pet_name" label="Name Of Pet" variant="outlined" size='small' />
                                            </div>
                                            <div>
                                                <Autocomplete
                                                    disablePortal
                                                    options={Age}
                                                    sx={{
                                                        minWidth: 200
                                                    }}
                                                    value={petFormData.pet_age} 
                                                    onChange={(e, val) => handlePetDetailsChange(e, val, "pet_age")} 
                                                    name="pet_age"
                                                    renderInput={(params) => <TextField {...params} label="Age Of Your Pet" size='small' value={petFormData.pet_age} onChange={handlePetDetailsChange} name="pet_age" />}
                                                />
                                            </div>
                                            <div>
                                                <Autocomplete
                                                    disablePortal
                                                    defaultValue={PetType[0].label}
                                                    options={PetType}
                                                    sx={{
                                                        minWidth: 115
                                                    }}
                                                    renderInput={(params) => <TextField {...params} size='small' value={petFormData.pet_type} onChange={handlePetDetailsChange} name="pet_type" />}
                                                />
                                            </div>
                                            <div className=''>
                                                <Autocomplete
                                                    disablePortal
                                                    required
                                                    // size="small" name="Size" 
                                                    options={selectOptions}
                                                    sx={{
                                                        minWidth: 200,
                                                        '& .Mui-focused.MuiAutocomplete-input': {
                                                            color: "blue"
                                                        },
                                                    }}
                                                    value={petFormData.pet_breed}
                                                    onChange={(e, val) => handlePetDetailsChange(e, val, "pet_breed")}
                                                    name="pet_breed"
                                                    renderInput={(params) => <TextField   {...params} label="Breed Of Your Pet" size='small' />}
                                                />
                                                
                                            </div>
                                        </div>
                                    </div> */}
                {petForms.map((pet, index) => (
                    <div key={index} className="px-5 py-3  rounded flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <TextField
                                className='min-w-sm'
                                sx={{ minWidth: 50 }}
                                value={pet.pet_name}
                                onChange={(e) => handlePetDetailsChange(index, e)}
                                name="pet_name"
                                label="Name Of Pet"
                                variant="outlined"
                                size="small"
                            />
                            <Autocomplete
                                disablePortal
                                options={Age}
                                sx={{ minWidth: 200 }}
                                value={pet.pet_age}
                                onChange={(e, val) => handlePetDetailsChange(index, e, val, "pet_age")}
                                renderInput={(params) => (
                                    <TextField {...params} label="Age Of Your Pet" size="small" />
                                )}
                            />
                            {/* <Autocomplete
                                disablePortal
                                options={PetType}
                                value={pet.pet_type}
                                onChange={(e, val) => handlePetDetailsChange(index, e, val, "pet_type")}
                                sx={{ minWidth: 115 }}
                                renderInput={(params) => (
                                    <TextField {...params} size="small" label="Pet Type" />
                                )}
                            /> */}
                            <Autocomplete
                                disablePortal
                                options={selectOptions}
                                sx={{ minWidth: 200 }}
                                value={pet.pet_breed}
                                onChange={(e, val) => handlePetDetailsChange(index, e, val, "pet_breed")}
                                renderInput={(params) => (
                                    <TextField {...params} label="Breed Of Your Pet" size="small" />
                                )}
                            />

                            {petForms.length > 1 && (
                                <Button onClick={() => dispatch(handleRemovePet(index))} color="error" variant="outlined">
                                    Remove
                                </Button>
                            )}

                        </div>

                    </div>
                ))}

                <div className=' flex justify-end mx-7'>
                    <Button
                        startIcon={<ControlPointIcon />
                        }
                        variant="contained"
                        color="primary"
                        onClick={handleAddPet}
                        className=""
                    >
                        Add Pet

                    </Button>
                </div>
            </div>
        </Fragment>
    )

}

export default PetDetails