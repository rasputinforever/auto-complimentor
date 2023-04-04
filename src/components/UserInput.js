import React from "react";

import { Card, InputGroup, FormControl } from 'react-bootstrap';
import procString from "../utils/languageDecoder.js"
import ErrorMsg from "./ErrorMsg.js"


const UserInput = ({ userInput, setUserInput, setResponse }) => {

  const [error, setError] = React.useState(false)
  
  const handleInputChange = (e) => {
    // Updating inputs
    const key = e.target.name;
    const value = e.target.value;    
    
    const newInput = Object.assign({}, userInput);
     
    newInput[key] = value
    setUserInput(newInput)
  };
  
  const handleFormSubmit = () => {
    setError(false)
    if (userInput.problem === '') {
      setError('Do not leave fields empty! How do you expect help without giving us more personal information?')
    } else if (userInput.problem.split(' ').length > 5) {

      setError('Your problems are too wordy! These mentors have limits!')

    } else {
      
      procString(userInput.problem)
      .then((res) => {        
        setResponse(res)  
      });
      
    }

    
  };

  return (
    <Card className="cardHeader">
      <div className="header">
        <h3>Auto CompliMentor</h3>
        <p className="introText">Welcome to the only <u>Automatic, Complimentary, Mentoring</u> system. Our team of mechanized advisors are experts at providing good, solid, and sound advice. The engineers at "ACM" have specially designed this team to thoughtfully, and carefully, consider your issues and deliver a response that will encourage and inspire you to overcome your specified trouble.</p>
        <p className="introText">Go ahead, the mentors are here to help! Please fill the following form with your name and a brief description of your problem...</p>
      </div>
      
      <InputGroup className="mb-3">
        <FormControl
          className='inputBox'
          value={userInput.userName ?? ""}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl
          className='inputBox'
          value={userInput.problem ?? ""}
          name="problem"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Problem"
        />
      </InputGroup>

      <div className='submitBtn' onClick={handleFormSubmit}>Submit</div>

      {error ? <ErrorMsg error={error} /> : null}      


    </Card>
);
}

export default UserInput;
