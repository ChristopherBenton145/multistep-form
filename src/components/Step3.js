import React from 'react';

function Step3({ changeStep }) {
  return (
    <div className="step">
      <h3>Account Information 3</h3>
      <input type="text" name="firstname" placeholder="First Name"></input>
      <input type="text" name="lastname" placeholder="Last Name"></input>
      <input type="text" name="age" placeholder="Age"></input>
      <div className="buttons">
        <button onClick={() => changeStep(-1)} type="button" className="button-previous">Previous</button>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Step3;
