import * as React from 'react';
import { createContext } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ServiceSection from './ServiceSection';
import AllServiceSecttion from './AllServiceSecttion';
import Additional from './Additional';
import CustomerInfo from './CustomerInfo';
import { useDispatch, useSelector } from 'react-redux';
import { handleToggleModal, setActiveStepAction } from '../../store/petServices/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const StepContext = createContext()

export default function MYStepper() {

  const ownerFormData = useSelector((state) => state.PetReducer.ownerDetails)
  const petFormData = useSelector((state) => state.PetReducer.petDetails)
  const boardingFormData = useSelector((state) => state.PetReducer.boardingDetails)
  const activeStep = useSelector((state) => state.PetReducer.activeStep)
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);


  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const addBooking = async () => {

    const payload = {
      ...ownerFormData,
      boardingDetails: boardingFormData,
      petDetails: petFormData

    }
    try {
      const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/bookingdetails`
      const fetchData = await fetch(URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const resp = await fetchData.json()
      alert(JSON.stringify(resp))
    } catch (err) {
      console.log("Incorect Details", err)
    }
    console.log(payload)
  }

  const handleSubmit = async () => {

    // close modal & default step 0 on modal open
    dispatch(handleToggleModal(false))
    dispatch(setActiveStepAction(0))
    toast.success("Service booked sucessfully")
    await addBooking()

  }


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


  const steps = [
    {
      // label: 'Service Section',
      component: <ServiceSection />
    },
    // {
    //   // label: 'Create an ad group',
    //   component: <AllServiceSecttion />

    // },
    {
      // label: 'Create an ad',
      component: <Additional />
    },
    {
      // label: 'Create an ad',
      component: < CustomerInfo />
    },
  ];

  const maxSteps = steps.length;

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
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
      <Box sx={{ height: 400, width: '100%', px: 2, }}>

        <StepContext.Provider value={{ handleNext }}>
          {steps[activeStep].component}
        </StepContext.Provider>

      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          // maxSteps <  ??
          <Button
            color='black'
            size="small"

            variant='outlined'
            onClick={activeStep === maxSteps - 1 ? handleSubmit : handleNext}
          // disabled={activeStep === maxSteps - 1}
          >
            {/* { maxSteps.length < 2 ?? */}
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
  );
}
