import React, { useState, useRef, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import "../styles/Form.scss";

function Form() {
  let [currentStep, setCurrentStep] = useState(0);
  let [steps, setSteps] = useState([]);
  let [stepIcons, setStepIcons] = useState([]);
  const form = useRef(null);

  useEffect(() => {
      let localSteps = [];
      let localStepIcons = [];
      form.current.childNodes.forEach(step => localSteps.push(step));
      document.querySelector(".progress").childNodes.forEach(stepIcon => localStepIcons.push(stepIcon));
      setSteps(localSteps);
      setStepIcons(localStepIcons);
  }, []);

  function changeStep(number) {
    // Checking if you pressed the next or the previous button
    if (number == 1) {
      steps[currentStep].classList.remove("active");
      steps[currentStep].classList.add("hidden");
      steps[currentStep + 1].classList.add("active");
      steps[currentStep + 1].classList.remove("hidden");
      stepIcons[currentStep + 1].classList.add("active");
      setCurrentStep(prevState => prevState + 1);
    } else {
      steps[currentStep].classList.remove("active");
      steps[currentStep].classList.add("hidden");
      steps[currentStep - 1].classList.remove("hidden");
      steps[currentStep - 1].classList.add("active");
      stepIcons[currentStep].classList.remove("active");
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
