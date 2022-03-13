import React from 'react';

function Step1({ changeStep }) {
  return (
    <div className="step active">
      <h3>Account Information</h3>
      <input type="text" name="firstname" placeholder="First Name" autoComplete='off'></input>
      <input type="text" name="lastname" placeholder="Last Name" autoComplete='off'></input>
      <input type="text" name="age" placeholder="Age" autoComplete='off'></input>
      <div className="buttons">
        <button onClick={() => changeStep(1)} type="button" className="button-next">Next</button>
      </div>
    </div>
  );
}

export default Step1;
