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

export const StepContext = createContext()

export default function MYStepper() {



  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const steps = [
    {
      // label: 'Service Section',
      component: <ServiceSection />
    },
    {
      // label: 'Create an ad group',
      component: <AllServiceSecttion />

    },
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
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {/* { maxSteps.length < 2 ?? */}
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
