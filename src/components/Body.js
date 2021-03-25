import React from "react";
import { Container } from 'react-bootstrap';

import UserInput from "./UserInput.js";

import Mentors from "./Mentors";

class Body extends React.Component {
    render() {
        return (
          <Container>
            <UserInput />
            <Mentors />
          </Container>
        );
      }
}

export default Body;
