import { Autocomplete, Button, MenuItem, Select, TextField } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PET_DETAILS, ADD_PET_MEDITION_DETAILS, ADD_PET_VACCINE_DETAILS, handleRemovePet, handleRemovePetMedition, handleRemovePetVaccine, setPetVaccineDetails, setTreatmentDetails } from '../../store/petServices/actions';
import { toast } from 'react-toastify';

const selecttime = [
    { label: "AM" },
    { label: "PM" }
]

const selectYear = [
    { label: "2000" },
    { label: "2001" },
    { label: "2002" },
    { label: "2003" },
    { label: "2004" },
    { label: "2005" },
    { label: "2006" },
    { label: "2007" },
    { label: "2008" },
    { label: "2009" },
    { label: "2010" },
    { label: "2011" },
    { label: "2012" },
    { label: "2013" },
    { label: "2014" },
    { label: "2015" },
    { label: "2016" },
    { label: "2017" },
    { label: "2018" },
    { label: "2019" },
    { label: "2020" },
    { label: "2021" },
    { label: "2022" },
    { label: "2023" },
    { label: "2024" },
    { label: "2025" }


]

function PetMedicalDetails({ pet_name }) {

    const petMeditionForms = useSelector((state) => state.PetReducer.petMeditionDetails)
    const petVaccineForms = useSelector((state) => state.PetReducer.petVaccineDetails)
    const petTreatmentForm = useSelector((state) => state.PetReducer.treatmentDetails)
    const dispatch = useDispatch()


    const handlePetMeditionDetailsChange = (index, e, val, key) => {
        let updatedMeditions = [...petMeditionForms];
        const updatedMedition = { ...updatedMeditions[index] }; // ✅ clone the specific object

        if (key) {
            updatedMedition[key] = val?.label || '';
        } else {
            const { name, value } = e.target;
            updatedMedition[name] = value;
        }
        updatedMeditions[index] = updatedMedition;
        dispatch({ type: ADD_PET_MEDITION_DETAILS, payload: updatedMeditions });
    };

    // vaccine
    const handlePetVaccinenDetailsChange = (index, e, val, key) => {
        let updatedVaccines = [...petVaccineForms];
        const updatedVaccine = { ...updatedVaccines[index] }; // ✅ clone the specific object

        if (key) {
            updatedVaccine[key] = val?.label || '';
        } else {
            const { name, value } = e.target;
            updatedVaccine[name] = value;
        }
        updatedVaccines[index] = updatedVaccine;
        dispatch(setPetVaccineDetails(updatedVaccines));
    };

    console.log("petMeditionForms", petVaccineForms)


    const handleAddMedition = () => {
        if (petMeditionForms.length >= 3) {
            toast.error("Pet Medition Limite Reached")
            return
        }
        const newMedition = { medication_name: '', description: '', dose_time: '', dosage: '' };
        dispatch({ type: ADD_PET_MEDITION_DETAILS, payload: [...petMeditionForms, newMedition] });
    };

    // vaccine add
    const handleAddVaccine = () => {
        if (petVaccineForms.length >= 3) {
            toast.error("Pet Vaccine Limite Reached")
            return
        }
        const newVaccine = { vaccine_name: '', year: null };
        dispatch({ type: ADD_PET_VACCINE_DETAILS, payload: [...petVaccineForms, newVaccine] });
    };

    // treatment add

    const handleTreatmentDetailsChange = (e) => {
        const { name, value } = e.target
        console.log("{ name, value }", { name, value })
        dispatch(setTreatmentDetails({ ...petTreatmentForm, ...{ [name]: value } }))
    }
    console.log("petTreatmentForm", petTreatmentForm)



    return (
        <div className='px-5 overflow-auto max-h-[380px] -z-10'>
            <h1 className='text-2xl font-bold'> {pet_name + "'s"} MEDICATION</h1>
            {petMeditionForms.map((pet, index) => (
                <div className='mt-5 flex gap-5'>
                    <TextField
                        className='min-w-sm'
                        sx={{ minWidth: 50 }}
                        value={pet.medication_name}
                        onChange={(e) => handlePetMeditionDetailsChange(index, e)}
                        name="medication_name"
                        label="Medication Name"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        className='min-w-sm'
                        sx={{ minWidth: 50 }}
                        value={pet.description}
                        onChange={(e) => handlePetMeditionDetailsChange(index, e)}
                        name="description"
                        label="Description"
                        variant="outlined"
                        size="small"
                    />
                    <Autocomplete
                        // disablePortal
                        options={selecttime}
                        sx={{ minWidth: 120 }}
                        value={pet.year}
                        onChange={(e, val) => handlePetMeditionDetailsChange(index, e, val, "pet_breed")}
                        renderInput={(params) => (
                            <TextField {...params} label="" size="small" />
                        )}
                    />
                    <TextField
                        className='min-w-sm'
                        sx={{ minWidth: 50 }}
                        value={pet.dosage}
                        onChange={(e) => handlePetMeditionDetailsChange(index, e)}
                        name="dosage"
                        label="dosage"
                        variant="outlined"
                        size="small"
                    />
                    {petMeditionForms.length > 1 && (
                        <Button onClick={() => dispatch(handleRemovePetMedition({ index, pet_name }))} color="error" variant="outlined">
                            Remove
                        </Button>
                    )
                    }
                </div>

            ))}
            <div className='mt-5'>
                <Button
                    sx={{
                        paddingX: 0,
                        paddingY: 0,
                        fontSize: '35px'
                    }}
                    onClick={handleAddMedition}
                    variant="contained"
                    color="primary"

                >

                    +
                </Button>
            </div>
            <div className='mt-5'>
                <h1 className='text-xl font-semibold'>
                    Does the pet have vaccinations? Please indicate the name of the vaccines and when did it received it
                </h1>
                {petVaccineForms.map((pet, index) => (

                    <div className='mt-5 flex w-full gap-5'>
                        <TextField
                            className='min-w-sm'

                            value={pet.vaccine_name}
                            onChange={(e) => handlePetVaccinenDetailsChange(index, e)}
                            name="vaccine_name"
                            label="Vaccine Name"
                            variant="outlined"
                            size="small"
                        />
                        <Autocomplete
                            disablePortal
                            options={selectYear}
                            sx={{ minWidth: 120 }}
                            value={pet.year}
                            onChange={(e, val) => handlePetVaccinenDetailsChange(index, e, val, "pet_breed")}
                            renderInput={(params) => (
                                <TextField {...params} label="Year" size="small" />
                            )}
                        />
                        {petVaccineForms.length > 1 && (
                            <Button onClick={() => dispatch(handleRemovePetVaccine(index))} color="error" variant="outlined">
                                Remove
                            </Button>
                        )}

                    </div>


                ))}
            </div>
            <div className='mt-5'>
                <Button
                    sx={{

                        fontSize: '30px'
                    }}
                    onClick={handleAddVaccine}
                    variant="contained"
                    color="primary"

                >

                    +
                </Button>
            </div>

            <div className='mt-5'>
                <h1 className='text-xl font-semibold'>
                    Does the pet have Spot On Treatment within last two months? Please indicate the brand and when did it received it.
                </h1>
                <div className='mt-5'>
                    <TextField value={petTreatmentForm.spot_on_treatment_desc} onChange={handleTreatmentDetailsChange} name="spot_on_treatment_desc" size='small' />
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-xl font-semibold'>
                    Neutering & Spaying Status
                </h1>
                <div className='mt-5'>
                    <TextField value={petTreatmentForm.neuter_or_spray} onChange={handleTreatmentDetailsChange} name="neuter_or_spray" size='small' />
                </div>
            </div>

        </div>
    )
}

export default PetMedicalDetails



