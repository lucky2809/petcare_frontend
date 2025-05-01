import * as React from 'react';
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


export const StepContext = createContext()

export default function BoardingStepper() {



  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isPetTaxi, setIsPetTaxi] = useState(true)
  const [isPetGrooming, setIsPetGrooming] = useState(true)


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const petProps = {
    handleNext,
    isPetGrooming, isPetTaxi, setIsPetGrooming, setIsPetTaxi     // props ko object me bej skte hai 
  }

  const generateExtraSteps = (isPetGrooming, isPetTaxi) => {
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

          component: < CustomerInfo />
        },
      ]

    }

    if (isPetTaxi) {
      taxiSteps = [
        {
          component: <PetTaxiCard />
        },
      ]
    }

    return [...steps, ...taxiSteps, ...groomingSteps]

  }

  const steps = generateExtraSteps(isPetGrooming, isPetTaxi)


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
      <Box sx={{ height: 390, width: '100%', px: 2, }}>

        <StepContext.Provider value={petProps}>
          {steps[activeStep].component}
        </StepContext.Provider>

      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            color='black'
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
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
