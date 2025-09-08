import React, { useState } from 'react';
import PersonalConstitution from './PersonalConstitution';
import EnvironmentLifestyle from './EnvironmentLifestyle';
import DietDigestion from './DietDigestion';
import HabitsMovement from './HabitsMovement';
import Summary from './Summary';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bodyType: [],
    energyLevels: '',
    concerns: [],
    location: '',
    dailyRoutine: '',
    climate: '',
    digestion: '',
    dietaryRestrictions: [],
    activityLevel: '',
    mentalState: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleDataUpdate = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  switch (step) {
    case 1:
      return (
        <PersonalConstitution
          formData={formData}
          nextStep={nextStep}
          handleDataUpdate={handleDataUpdate}
        />
      );
    case 2:
      return (
        <EnvironmentLifestyle
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleDataUpdate={handleDataUpdate}
        />
      );
    case 3:
      return (
        <DietDigestion
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleDataUpdate={handleDataUpdate}
        />
      );
    case 4:
      return (
        <HabitsMovement
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleDataUpdate={handleDataUpdate}
        />
      );
    case 5:
      return <Summary formData={formData} prevStep={prevStep} />;
    default:
      return <div>Thank you for completing the survey!</div>;
  }
}

export default App;
