import React from 'react';

function Step2({ changeStep }) {
  return (
    <div className="step">
      <h3>Account Information 2</h3>
      <input type="text" name="firstname" placeholder="First Name"></input>
      <input type="text" name="lastname" placeholder="Last Name"></input>
      <input type="text" name="age" placeholder="Age"></input>
      <div className="buttons">
        <button onClick={() => changeStep(-1)} type="button" className="button-previous">Previous</button>
        <button onClick={() => changeStep(1)} type="button" className="button-next">Next</button>
      </div>
    </div>
  );
}

export default Step2;
