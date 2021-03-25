import React from "react";
import { Row, InputGroup, FormControl } from 'react-bootstrap';

class UserInput extends React.Component {
    state = {
        visible: false
      };
      
    render() {
      return (
          <Row>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Your Name"
                aria-label="Your Name"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
  
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Your Problem"
                aria-label="Your Problem"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Row>
      );
    }
  }

export default UserInput;
