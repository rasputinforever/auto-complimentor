import React from "react";
import { Card, InputGroup, FormControl } from 'react-bootstrap';
import procString from "../utils/languageDecoder.js"
import ErrorMsg from "./inputError.js"

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: props.username,
        problem: props.problem,
        response: false,
        error: false
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

  searchDictionary = query => {
  
     return procString(query)


  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.problem === '') {
      
      // error message for empty problem
      this.setState({ error: true })
      return 
      
    }

    this.searchDictionary(this.state.problem)
    .then((res) => {

      this.setState({ 
        error: false,
        problem: res,
        response: true, 
        }, function () {
            this.props.onUpdate(this.state)
        }
      )

      

    });
  };
    
  render() {
    return (
        <Card>
          <div className="header">
            <h3>Auto CompliMentor</h3>
            <p id="introText">Welcome to the only Automaitc, Complimentary Mentoring system. Please provide your name and a brief description of your current problem, issue, or trouble below. Our Auto Compli-Mentors will see you soon!</p>
          </div>
          {this.state.error === true ? <ErrorMsg /> : <></>}
          
          <InputGroup className="mb-3">
            <FormControl
              className='inputBox'
              value={this.state.firstName}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Your Name"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              className='inputBox'
              value={this.state.firstName}
              name="problem"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Your Problem"
            />
          </InputGroup>

          <div className='submitBtn' onClick={this.handleFormSubmit}>Submit</div>
          


        </Card>
    );
  }

}

export default UserInput;
