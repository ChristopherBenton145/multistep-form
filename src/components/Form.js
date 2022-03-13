import React from 'react';
import "../styles/Form.scss"

function Form() {
  return (
    <form>
        <div className="step active">
            <h3>Account Information</h3>
            <input type="text" name="firstname" placeholder="First Name"></input>
            <input type="text" name="lastname" placeholder="Last Name"></input>
            <input type="text" name="age" placeholder="Age"></input>
            <div className="buttons">
                <button type="button" className="button-previous">Previous</button>
                <button type="button" className="button-next">Next</button>
            </div>
        </div>
        <div className="step">
            <h3>Personal Details 2</h3>
            <input type="text" name="firstname" placeholder="First Name"></input>
            <input type="text" name="lastname" placeholder="Last Name"></input>
            <input type="text" name="age" placeholder="Age"></input>
            <div className="buttons">
                <button type="button" className="button-next">Next</button>
                <button type="button" className="button-previous">Previous</button>
            </div>
        </div>
        <div className="step">
            <h3>Personal Details 3</h3>
            <input type="text" name="firstname" placeholder="First Name"></input>
            <input type="text" name="lastname" placeholder="Last Name"></input>
            <input type="text" name="age" placeholder="Age"></input>
            <div className="buttons">
                <button type="button" className="button-next">Next</button>
                <button type="button" className="button-previous">Previous</button>
            </div>
        </div>
    </form>
  );
}

export default Form;
