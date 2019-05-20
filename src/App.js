import React from 'react';
import './App.css';
import StepForm from './components/StepForm';
import StepWrapper from './hoc/StepWrapper';

function App() {
  return (
    <div className="App">
        StepWrapper(  <StepForm/>)
    </div>
  );
}

export default App;
