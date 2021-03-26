import React from "react";
import { Container } from 'react-bootstrap';

import UserInput from "./UserInput.js";

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
