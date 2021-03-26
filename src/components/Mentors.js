import React from "react";
import { Row, Col } from 'react-bootstrap';

// db array
const MentorsDB = require("../db/mentors.js")

const mentorsContent = MentorsDB.map((mentor) => {
        const imgSrc = '/images/' + mentor.image
        return (
            <Row className='mentorArticle'> 
            
                    <Col>
                        <img src={imgSrc} alt={mentor.name} className='mentorImg' />
                        <h3>{mentor.name}</h3>
                    </Col>
                    <Col xs={10} className='mentorTextBox'>
                        <p className='mentorText' style={mentor.style}>{mentor.messages[2]}</p>
                    </Col>
                
                
            </Row>
        )      
})

class Mentors extends React.Component {
    render() {
        return (
            <Row className='mentorContainer'>
                {mentorsContent}
            </Row>
        )
    }
}

export default Mentors;
