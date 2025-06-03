import { Autocomplete, Button, MenuItem, Select, TextField } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PET_DETAILS, ADD_PET_MEDITION_DETAILS, ADD_PET_VACCINE_DETAILS, handleRemovePetMedition, handleRemovePetVaccine, setTreatmentDetails } from '../../store/petServices/actions';
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
  const dispatch = useDispatch();

  const petMeditionForms = useSelector(
    (state) => state.PetReducer.petMeditionDetails[pet_name] ||  [{ medication_name: '', description: '', dose_time: '', dosage: '' }]
  );
  const petVaccineForms = useSelector(
    (state) => state.PetReducer.petVaccineDetails[pet_name] ||  [{ vaccine_name: '', year: null }]
  );
  const petTreatmentForm = useSelector(
    (state) => state.PetReducer.treatmentDetails[pet_name] || {
      spot_on_treatment_desc: '',
      neuter_or_spray: '',
    }
  );

  const handlePetMeditionDetailsChange = (index, e, val, key) => {
    const updatedMeditions = [...petMeditionForms];
    const updatedMedition = { ...updatedMeditions[index] };

    if (key) {
      updatedMedition[key] = val?.label || '';
    } else {
      const { name, value } = e.target;
      updatedMedition[name] = value;
    }

    updatedMeditions[index] = updatedMedition;
    dispatch({
      type: ADD_PET_MEDITION_DETAILS,
      payload: { pet_name, data: updatedMeditions },
    });
  };

  const handlePetVaccinenDetailsChange = (index, e, val, key) => {
    const updatedVaccines = [...petVaccineForms];
    const updatedVaccine = { ...updatedVaccines[index] };

    if (key) {
      updatedVaccine[key] = val?.label || '';
    } else {
      const { name, value } = e.target;
      updatedVaccine[name] = value;
    }

    updatedVaccines[index] = updatedVaccine;
    dispatch({
      type: ADD_PET_VACCINE_DETAILS,
      payload: { pet_name, data: updatedVaccines },
    });
  };

  const handleAddMedition = () => {
    if (petMeditionForms.length >= 3) {
      toast.error('Pet Medition Limit Reached');
      return;
    }
    const newMedition = {
      medication_name: '',
      description: '',
      dose_time: '',
      dosage: '',
    };
    dispatch({
      type: ADD_PET_MEDITION_DETAILS,
      payload: { pet_name, data: [...petMeditionForms, newMedition] },
    });
  };

  const handleAddVaccine = () => {
    if (petVaccineForms.length >= 3) {
      toast.error('Pet Vaccine Limit Reached');
      return;
    }
    const newVaccine = { vaccine_name: '', year: null };
    dispatch({
      type: ADD_PET_VACCINE_DETAILS,
      payload: { pet_name, data: [...petVaccineForms, newVaccine] },
    });
  };

  const handleTreatmentDetailsChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setTreatmentDetails({
        pet_name,
        data: { ...petTreatmentForm, [name]: value },
      })
    );
  };

  return (
    <div className="px-5 overflow-auto max-h-[380px] -z-10">
      <h1 className="text-2xl font-bold">{pet_name + "'s"} MEDICATION</h1>
      {petMeditionForms.map((pet, index) => (
        <div key={index} className="mt-5 flex gap-5">
          <TextField
            value={pet.medication_name}
            onChange={(e) => handlePetMeditionDetailsChange(index, e)}
            name="medication_name"
            label="Medication Name"
            variant="outlined"
            size="small"
          />
          <TextField
            value={pet.description}
            onChange={(e) => handlePetMeditionDetailsChange(index, e)}
            name="description"
            label="Description"
            variant="outlined"
            size="small"
          />
          <Autocomplete
            options={selecttime}
            sx={{ minWidth: 120 }}
            value={pet.dose_time || null}
            onChange={(e, val) =>
              handlePetMeditionDetailsChange(index, e, val, 'dose_time')
            }
            renderInput={(params) => (
              <TextField {...params} label="Time" size="small" />
            )}
          />
          <TextField
            value={pet.dosage}
            onChange={(e) => handlePetMeditionDetailsChange(index, e)}
            name="dosage"
            label="Dosage"
            variant="outlined"
            size="small"
          />
          {petMeditionForms.length > 1 && (
            <Button
              onClick={() => dispatch(handleRemovePetMedition(index))}
              color="error"
              variant="outlined"
            >
              Remove
            </Button>
          )}
        </div>
      ))}
      <div className="mt-5">
        <Button
          onClick={handleAddMedition}
          variant="contained"
          color="primary"
          sx={{ fontSize: '35px' }}
        >
          +
        </Button>
      </div>

      <div className="mt-5">
        <h1 className="text-xl font-semibold">
          Vaccination History
        </h1>
        {petVaccineForms.map((pet, index) => (
          <div key={index} className="mt-5 flex w-full gap-5">
            <TextField
              value={pet.vaccine_name}
              onChange={(e) => handlePetVaccinenDetailsChange(index, e)}
              name="vaccine_name"
              label="Vaccine Name"
              variant="outlined"
              size="small"
            />
            <Autocomplete
              options={selectYear}
              value={pet.year || null}
              onChange={(e, val) =>
                handlePetVaccinenDetailsChange(index, e, val, 'year')
              }
              renderInput={(params) => (
                <TextField {...params} label="Year" size="small" />
              )}
            />
            {petVaccineForms.length > 1 && (
              <Button
                onClick={() => dispatch(handleRemovePetVaccine(index))}
                color="error"
                variant="outlined"
              >
                Remove
              </Button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          onClick={handleAddVaccine}
          variant="contained"
          color="primary"
          sx={{ fontSize: '30px' }}
        >
          +
        </Button>
      </div>

      <div className="mt-5">
        <h1 className="text-xl font-semibold">
          Spot On Treatment in the last 2 months
        </h1>
        <TextField
          value={petTreatmentForm.spot_on_treatment_desc}
          onChange={handleTreatmentDetailsChange}
          name="spot_on_treatment_desc"
          size="small"
        />
      </div>

      <div className="mt-5">
        <h1 className="text-xl font-semibold">Neutering & Spaying Status</h1>
        <TextField
          value={petTreatmentForm.neuter_or_spray}
          onChange={handleTreatmentDetailsChange}
          name="neuter_or_spray"
          size="small"
        />
      </div>
    </div>
  );
}


export default PetMedicalDetails



