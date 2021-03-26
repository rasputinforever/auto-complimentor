import React from "react";
import { Row, InputGroup, FormControl } from 'react-bootstrap';

import Mentors from "./Mentors";

class UserInput extends React.Component {
    state = {
        username: '',
        problem: '',
        response: false
      };
    
    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      // render the Mentors using state info from here!
      this.setState({
        response: true
      });
    };
    
    render() {
      return (
          <Row>
            <InputGroup className="mb-3">
              <FormControl
                value={this.state.firstName}
                name="username"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Your Name"
              />
            </InputGroup>
  
            <InputGroup className="mb-3">
              <FormControl
                value={this.state.firstName}
                name="problem"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Your Problem"
              />
            </InputGroup>

            <button onClick={this.handleFormSubmit}>Submit</button>

            {this.state.response === true ? <Mentors name={this.state.username} problem={this.state.problem}/> : <></>}

          </Row>
      );
    }
  }

export default UserInput;
