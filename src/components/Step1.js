import React, { useRef, useEffect } from 'react';

function Step1({ changeStep }) {
  const step = useRef(null);

  return (
    <div className="step active" ref={step}>
      <h3>Account Information</h3>
      <input type="text" name="firstname" placeholder="First Name"></input>
      <input type="text" name="lastname" placeholder="Last Name"></input>
      <input type="text" name="age" placeholder="Age"></input>
      <div className="buttons">
        <button onClick={() => changeStep(1)} type="button" className="button-next">Next</button>
      </div>
    </div>
  );
}

export default Step1;
