import { createContext } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import AdditionalService from './AdditionalService';
import { useState } from 'react';
import ServiceSection from '../PetGroomingSteperComp/ServiceSection';
import AllServiceSection from '../PetGroomingSteperComp/AllServiceSecttion';
import Additional from '../PetGroomingSteperComp/Additional';
import CustomerInfo from '../PetGroomingSteperComp/CustomerInfo';
import PetTaxiCard from '../petTaxi/PetTaxiCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CART_ID, handleToggleModal, setActiveStepAction } from '../../store/petServices/actions';
import { toast } from 'react-toastify';
import PetMedicalDetails from '../FormComp/PetMedicalDetails';
import { addBooking, toggleCart } from '../../store/slices/cartSlice';
import { nanoid } from '@reduxjs/toolkit';
import { getPetLength } from '../../utils/helperfunc/helper';
import { addBookingData } from '../../utils/APIs';


export const StepContext = createContext()

export default function BoardingStepper() {
  const ownerFormData = useSelector((state) => state.PetReducer.ownerDetails)
  const petFormData = useSelector((state) => state.PetReducer.petDetails)
  const boardingDays = useSelector((state) => state.PetReducer.boardingDetails?.boarding_days) || 1
  const activeStep = useSelector((state) => state.PetReducer.activeStep)
  const boardingFormData = useSelector((state) => state.PetReducer.boardingDetails)
  const groomingData = useSelector((state) => state.PetReducer.groomingDetails)
  const BoadingPrice = useSelector((state) => state.PetReducer.bookPrice)



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useTheme();
  // const [activeStep, setActiveStep] = useState(0);
  const [isPetTaxi, setIsPetTaxi] = useState(true)
  const [isPetGrooming, setIsPetGrooming] = useState(true)


  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      navigate("/petboarding")
      return
    }
    dispatch(setActiveStepAction(activeStep + 1));
  };

  const handleBack = () => {
    dispatch(setActiveStepAction(activeStep - 1))
  };

  const petProps = {
    handleNext,
    isPetGrooming, isPetTaxi, setIsPetGrooming, setIsPetTaxi     // props ko object me bej skte hai 
  }

  const handleAdd = async () => {
    const payload = generateCartPayload()
    console.log("payload_redux", payload)
    if (!payload) {
      toast.error("booking data is not found")
      return
    }
    const cart_id = nanoid()
    dispatch(
      addBooking({ ...payload, cart_id })
    );
    
        await addBookingData({
      ...ownerFormData,
      boardingDetails: boardingFormData,
      petDetails: petFormData

    })

    dispatch({ type: ADD_CART_ID, payload: cart_id });
    navigate("/")
    dispatch(toggleCart());
  };

  const generateCartPayload = () => {
    const PET_LENGTH = getPetLength(petFormData)
    console.log("PET_LENGTH", PET_LENGTH, boardingDays)
    let petName = ""
    let boarding = (BoadingPrice ?? 0) * boardingDays * PET_LENGTH
    let grooming = (groomingData.map(p => p.price).reduce((sum, val) => sum + val, 0) ?? 0) * boardingDays * PET_LENGTH
    let taxi = 0 * boardingDays * PET_LENGTH
    if (petFormData[0]?.pet_name) {
      petName = `${petFormData[0]?.pet_name} and Friends Booking`
    } else {
      toast.error("no pet name found")
      return
    }
    console.log(" { petName, boarding, grooming, taxi }", { petName, boarding, grooming, taxi })

    return { petName, boarding, grooming, taxi }


  }


  const handleSubmit = async () => {
    // close modal & default step 0 on modal open
    dispatch(handleToggleModal(false))
    dispatch(setActiveStepAction(0))

    if (isPetTaxi) {
      navigate("/pettaxi")
    } else {
      handleAdd()
      toast.success("Booking added sucessfully")


    }
  }

  const generateExtraSteps = (isPetGrooming, isPetTaxi) => {

    let firststep = [
      // { component: <PetMedicalDetails /> }
    ]
    if (petFormData?.length > 0) {
      const petNames = petFormData.map(p => p.pet_name).filter(Boolean)
      firststep = petNames.map((name, i) => ({ component: <PetMedicalDetails key={i} pet_name={name} /> }))
    }
    let steps = [
      {
        // label: 'choose service grooming or taxi',
        component: <AdditionalService />
      },
    ]

    let groomingSteps = []

    let taxiSteps = []

    if (isPetGrooming) {
      groomingSteps = [
        {
          component: <ServiceSection />
        },
        {

          component: <AllServiceSection />

        },
        {
          component: <Additional />
        },
        {

          component: < CustomerInfo isPetTaxi={isPetTaxi} />
        },
      ]

    }

    // if (isPetTaxi) {
    //   taxiSteps = [
    //     {
    //       component: <PetTaxiCard />
    //     },
    //   ]
    // }

    return [...firststep, ...steps, ...taxiSteps, ...groomingSteps]

  }

  const steps = generateExtraSteps(isPetGrooming, isPetTaxi)
  const maxSteps = steps.length;

  return (
      <div className=''>
    <Box className='' sx={{ maxWidth: "100%", maxHeight: "500px", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          // height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        {/* <Typography>{steps[activeStep].label}</Typography> */}
      </Paper>
      <Box sx={{ height: 390, width: '100%', px: 2, }}>

        <StepContext.Provider value={petProps}>
          {steps[activeStep].component}
        </StepContext.Provider>

      </Box>
      <MobileStepper
        className='min-w-full'
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
          
            color='black'
            size="small"
            // onClick={handleNext}
            onClick={activeStep === maxSteps - 1 ? handleSubmit : handleNext}
          // disabled={activeStep === maxSteps - 1}
          >
            {activeStep === maxSteps - 1 ? "Proceed" : "Next"}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button color='black' size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </div>
  );
}
