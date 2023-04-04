import React from "react";
import { Container } from 'react-bootstrap';

import UserInput from "./UserInput.js";
import Mentors from "./Mentors";

const Body = () => {
  
  const [userInput, setUserInput] = React.useState({
    name: "",
    problem: ""
  })
  const [response, setResponse] = React.useState(false)

console.log(response)
    return (
      <Container>
        
        {response === false ? 
          <UserInput userInput={userInput} setUserInput={setUserInput} response={response} setResponse={setResponse} /> 
        : null}

        {response ? 
          <Mentors userInput={userInput} setUserInput={setUserInput} response={response} setResponse={setResponse} />           
        : null}

        <div className="footerText">Created by <a href="https://github.com/rasputinforever">Erik Portillo</a>, 2021</div>
      </Container>
    );
    
}

export default Body;
