import React from "react";
import { Row } from 'react-bootstrap';

// db array
const MentorsDB = require("../db/mentors.js")

const mentorsContent = MentorsDB.map((mentor) => {
        const imgSrc = '/images/' + mentor.image
        return (
            <article className='mentorArticle'> 
                <img src={imgSrc} alt={mentor.name} className='mentorImg' />
                <h3>{mentor.name}</h3>
                <p style={mentor.style}>{mentor.messages[1]}</p>
            </article>
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
