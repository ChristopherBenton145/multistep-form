import React, { useState, useRef, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import "../styles/Form.scss";

function Form() {
  let [currentStep, setCurrentStep] = useState(0);
  let [steps, setSteps] = useState([]);
  const form = useRef(null);

  useEffect(() => {
      let localSteps = [];
      form.current.childNodes.forEach(step => localSteps.push(step));
      setSteps(localSteps);
  }, []);

  function changeStep(number) {
    // Checking if you pressed the next or the previous button
    if (number == 1) {
      steps[currentStep].classList.remove("active");
      steps[currentStep].classList.add("hidden");
      steps[currentStep + 1].classList.add("active");
      steps[currentStep + 1].classList.remove("hidden");
      setCurrentStep(prevState => prevState + 1);
    } else {
      steps[currentStep].classList.remove("active");
      steps[currentStep].classList.add("hidden");
      steps[currentStep - 1].classList.remove("hidden");
      steps[currentStep - 1].classList.add("active");
      setCurrentStep(prevState => prevState - 1);
    }
  }

  return (
    <form ref={form}>
        <Step1 changeStep={changeStep} />
        <Step2 changeStep={changeStep} />
        <Step3 changeStep={changeStep} />
    </form>
  );
}

export default Form;
