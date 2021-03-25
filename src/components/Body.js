import React from "react";
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap';


class Body extends React.Component {
    render() {
        return (
          <Container>
            <UserInput />
          </Container>
        );
      }
}

export default Body;

class UserInput extends React.Component {
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
