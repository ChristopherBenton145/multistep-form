import React from 'react';

function Step2({ changeStep }) {
  return (
    <div className="step">
      <h3>Account Settup</h3>
      <input type="text" name="email" placeholder="Email"></input>
      <input type="password" name="password" placeholder="Password"></input>
      <input type="password" name="confirm-password" placeholder="Confirm Password"></input>
      <div className="buttons">
        <button onClick={() => changeStep(-1)} type="button" className="button-previous">Previous</button>
        <button onClick={() => changeStep(1)} type="button" className="button-next">Next</button>
      </div>
    </div>
  );
}

export default Step2;
