import React from "react";
import { Row, InputGroup, FormControl } from 'react-bootstrap';

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: props.username,
        problem: props.problem,
        response: false
        }
  }
    
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
      
      // sends to parent
      this.props.onUpdate(this.state)

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

          </Row>
      );
    }
  }

export default UserInput;
