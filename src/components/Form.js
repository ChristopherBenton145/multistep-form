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
    
//   function previous(e) {
//     setCurrentStep(prevState => prevState - 1);
//   }

//   function next(e) {
//     steps[currentStep].classList.toggle("active");
//     steps[currentStep + 1].classList.toggle("active");
//     setCurrentStep(prevState => prevState + 1);
//   }

  function changeStep(number) {
    // Checking if you pressed the next or the previous button
    if (number == 1) {
      steps[currentStep].classList.toggle("active");
      steps[currentStep + 1].classList.toggle("active");
      setCurrentStep(prevState => prevState + 1);
    } else {
    }
  }

  return (
    <form ref={form}>
        <Step1 changeStep={changeStep} />
        <Step2 changeStep={changeStep} />
        <Step3 changeStep={changeStep} />
        {/* <div className="step">
            <h3>Personal Details 2</h3>
            <input type="text" name="firstname" placeholder="First Name"></input>
            <input type="text" name="lastname" placeholder="Last Name"></input>
            <input type="text" name="age" placeholder="Age"></input>
            <div className="buttons">
                <button onClick={(e) => previous(e)} type="button" className="button-previous">Previous</button>
                <button onClick={(e) => next(e)} type="button" className="button-next">Next</button>
            </div>
        </div>
        <div className="step">
            <h3>Personal Details 3</h3>
            <input type="text" name="firstname" placeholder="First Name"></input>
            <input type="text" name="lastname" placeholder="Last Name"></input>
            <input type="text" name="age" placeholder="Age"></input>
            <div className="buttons">
                <button onClick={(e) => previous(e)} type="button" className="button-previous">Previous</button>
                <button onClick={(e) => next(e)} type="button" className="button-next">Next</button>
            </div>
        </div> */}
    </form>
  );
}

export default Form;
