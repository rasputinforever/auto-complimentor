import React from "react";
import { Row, InputGroup, FormControl } from 'react-bootstrap';
import API from "../utils/API";
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
  
      return new Promise(resolve => {

        // split the problem sentence into an arr of words
        const wordArr = query.split(" ")
        let foundWord = '"' + query + '"';

        // do an API call to find the word-type, looking for nouns

        for (let i = 0; i < wordArr.length; i++) {

            API.search(wordArr[i])
            .then(res => {
              const wordType = res.data[0].fl
              if (wordArr[i].length > 2 && wordType === 'noun') {
                
                foundWord = wordArr[i]
              }
            })
            .then(() => {
              if (i === wordArr.length - 1) {
                resolve(foundWord)
              }
            })
        }
      });

      

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
          
          <Row>{this.state.error === true ? <ErrorMsg /> : <></>}</Row>


        </Row>
    );
  }

}

export default UserInput;
