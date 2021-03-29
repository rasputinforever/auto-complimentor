import React from "react";
import { Container } from 'react-bootstrap';

import UserInput from "./UserInput.js";
import Mentors from "./Mentors";

class Body extends React.Component {
  state = {
    username: '',
    problem: '',
    response: false
  };

  handleInputChange = event => {

    // this is receiving info from the child form that is then transmitted to the Mentors class
    this.setState({ 
      username: event.username,
      problem: event.problem,
      response: event.response
     });
    
  };

  render() {
      return (
        <Container>
          
          {this.state.response === false ? <UserInput username={this.state.username} problem={this.state.problem} onUpdate={this.handleInputChange}/> : <></>}
          {this.state.response === true ? <Mentors username={this.state.username} problem={this.state.problem} onUpdate={this.handleInputChange}/> : <></>}
          <div className="footerText">Created by <a href="https://github.com/rasputinforever">Erik Portillo</a>, 2021</div>
        </Container>
      );
    }
}

export default Body;
