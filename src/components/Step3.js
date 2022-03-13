import React from 'react';

function Step3({ changeStep }) {
  return (
    <div className="step">
      <h3>Extra</h3>
      <input type="text" name="notes" placeholder="Notes" autoComplete='off'></input>
      <div className="buttons">
        <button onClick={() => changeStep(-1)} type="button" className="button-previous">Previous</button>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Step3;
