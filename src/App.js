import React, { useState } from 'react';
import VocabularyPractice from './components/VocabularyPractice';
import FillInTheBlank from './components/FillInTheBlank';
import SentenceReorder from './components/SentenceReorder';
import ProgressBar from './components/ProgressBar';

function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <div className="app-container">
      <h1>French Vocabulary Practice</h1>
      <ProgressBar current={step} total={totalSteps} />
      {step === 1 && <VocabularyPractice />}
      {step === 2 && <FillInTheBlank />}
      {step === 3 && <SentenceReorder />}
      <button onClick={nextStep} disabled={step === totalSteps} className="next-button">
        Next
      </button>
    </div>
  );
}

export default App;
