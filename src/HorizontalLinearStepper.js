import React, { useState } from 'react';
import { Button, Stepper, Step, StepLabel } from '@mui/material';
import Personal from './component/Personal';
import Academic from './component/Academic';
import Address from './component/Address';
import Submission from './component/Submission';

function getSteps() {
  return ['Personal Details', 'Academic Details', 'Address Details', 'Submission'];
}

const HorizontalLinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Personal />;
      case 1:
        return <Academic />;
      case 2:
        return <Address />;
      case 3:
        return <Submission />;
      default:
        return 'Successfully Submitted!!';
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    alert('Form submitted successfully!');
    // Navigate to Personal.js (Assuming Personal.js is in the same directory)
    setActiveStep(0); // Reset the stepper to the first step
  };

  return (
    <div>
      <div className="stepperContainer">
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>{getStepContent(activeStep)}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {activeStep !== 0 && (
          <Button variant="contained" color="primary" onClick={handleBack}>
            Back
          </Button>
        )}
        {activeStep !== steps.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleFinish}>
            Finish
          </Button>
        )}
      </div>
    </div>
  );
};

export default HorizontalLinearStepper;
