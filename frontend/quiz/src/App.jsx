import React, { useState } from 'react';
import PersonalConstitution from './PersonalConstitution';
import EnvironmentLifestyle from './EnviornmentLifestyle';
import DietDigestion from './DietDigestion';
import HabitsMovement from './HabitsMovement';
import Summary from './Summary';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleDataUpdate = (data) => {
    setFormData({ ...formData, ...data });
  };

  switch (step) {
    case 1:
      return <PersonalConstitution nextStep={nextStep} handleDataUpdate={handleDataUpdate} />;
    case 2:
      return <EnvironmentLifestyle nextStep={nextStep} prevStep={prevStep} handleDataUpdate={handleDataUpdate} />;
    case 3:
      return <DietDigestion nextStep={nextStep} prevStep={prevStep} handleDataUpdate={handleDataUpdate} />;
    case 4:
      return <HabitsMovement nextStep={nextStep} prevStep={prevStep} handleDataUpdate={handleDataUpdate} />;
    case 5:
      return <Summary formData={formData} prevStep={prevStep} />;
    default:
      return <div>Thank you for completing the survey!</div>;
  }
}

export default App;
