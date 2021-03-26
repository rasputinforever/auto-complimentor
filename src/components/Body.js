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

    console.log("incoming event, ", event)
    // this is receiving info from the child form that is then transmitted to the Mentors class
    this.setState({ 
      username: event.username,
      problem: event.problem,
      response: event.response
     });

     console.log("new state", this.state)
    
  };

  render() {
      return (
        <Container>
          
          {this.state.response === false ? <UserInput username={this.state.username} problem={this.state.problem} onUpdate={this.handleInputChange}/> : <></>}
          {this.state.response === true ? <Mentors username={this.state.username} problem={this.state.problem} onUpdate={this.handleInputChange}/> : <></>}

        </Container>
      );
    }
}

export default Body;
