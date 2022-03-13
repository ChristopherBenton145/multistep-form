import React, { useState, useRef, useEffect } from 'react';
import "../styles/Form.scss";

function Form() {
  let [currentStep, setCurrentStep] = useState(0);
  let [steps, setSteps] = useState([]);
  const form = useRef(null);

  useEffect(() => {
      let localSteps = [];
      form.current.childNodes.forEach((step, index) => {
          localSteps.push(step);
      });
      setSteps(localSteps);
    }, []);
    
  function previous(e) {
    setCurrentStep(prevState => prevState - 1);
  }

  function next(e) {
    steps[currentStep].classList.toggle("active");
    steps[currentStep + 1].classList.toggle("active");
    setCurrentStep(prevState => prevState + 1);
}

  return (
    <form ref={form}>
        <div className="step active">
            <h3>Account Information</h3>
            <input type="text" name="firstname" placeholder="First Name"></input>
            <input type="text" name="lastname" placeholder="Last Name"></input>
            <input type="text" name="age" placeholder="Age"></input>
            <div className="buttons">
                <button onClick={(e) => previous(e)} type="button" className="button-previous">Previous</button>
                <button onClick={(e) => next(e)} type="button" className="button-next">Next</button>
            </div>
        </div>
        <div className="step">
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
        </div>
    </form>
  );
}

export default Form;
