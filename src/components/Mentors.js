import React from "react";
import { Row, Col } from 'react-bootstrap';

// db array
const MentorsDB = require("../db/mentors.js")



function Mentors(props) {   
    console.log(props.problem)

    const mentorsContent = MentorsDB.map((mentor) => {
        const imgSrc = '/images/' + mentor.image
        const mentorMessage = messageRandomizer(mentor.messages)
        const newMessage = transformMessage(mentorMessage, props.name, props.problem)
        return (
            <Row className='mentorArticle'> 
                    <Col>
                        <img src={imgSrc} alt={mentor.name} className='mentorImg' />
                        <h3>{mentor.name}</h3>
                    </Col>
                    <Col xs={10} className='mentorTextBox'>
                        <p className='mentorText' style={mentor.style}>{newMessage}</p>
                    </Col>
            </Row>
        )      
    })

    return (
        <Row className='mentorContainer'>
            {mentorsContent}
        </Row>
    )
    
}

export default Mentors;

function messageRandomizer(msgArr) {

    const msg = msgArr[Math.floor(Math.random() * msgArr.length)]

    return msg

}

function transformMessage(msg, name, prob) {
    let newMsg;
    newMsg = msg.replace("userName", name)
    newMsg = newMsg.replace("userProblem", prob)

    return newMsg
}