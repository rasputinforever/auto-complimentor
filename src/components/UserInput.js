import React from "react";
import { Row, InputGroup, FormControl } from 'react-bootstrap';
import API from "../utils/API";

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

  searchDictionary = query => {
    return new Promise(resolve => {
      // split the problem sentence into an arr of words
      const wordArr = query.split(" ")
      // do an API call to find the word-type, looking for nouns
      wordArr.forEach(word => {

        API.search(word)
        .then(res => {
          const wordType = res.data[0].fl
          if (wordType === 'noun') {

            resolve(word);
          }
        });
      });
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.searchDictionary(this.state.problem)
    .then((res) => {

      this.state.problem = res

      // render the Mentors using state info from here!
      this.state.response = true;
      
      // sends to parent
      this.props.onUpdate(this.state)

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

        </Row>
    );
  }

}

export default UserInput;
