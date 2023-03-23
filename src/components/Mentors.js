import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import { messageRandomizer, transformMessage } from '../utils/mentorMsgTools.js'
// pseudo-db array
const MentorsDB = require("../db/mentors.js")

const Mentors = ({ response, setResponse, userInput, setUserInput }) => {
    

    const handleSubmitBtn = () => {
        setUserInput({
            userName: userInput.userName,
            problem: ""
        })

        setResponse(false)
        
    };

    return (
        <Row className='mentorContainer'>
            <Card className="cardHeader">
                <h2 className="">Your Mentors have Responded...</h2>
            </Card>
            {
            MentorsDB.map((mentor) => {
                const imgSrc = './images/' + mentor.image
                const mentorMessage = messageRandomizer(mentor.messages)
                const newMessage = transformMessage(mentorMessage, userInput.userName, response)
                // uppercase the first letter of the message
                const improvedMsg = newMessage.charAt(0).toUpperCase() + newMessage.slice(1);
                return (
                    <Row className='mentorArticle' key={mentor.name}> 
                        <Col sm={3} className='mentorCard'>
                            <img src={imgSrc} alt={mentor.name} className='mentorImg' />
                            <h3>{mentor.name}</h3>
                            <p>Age: {mentor.age}</p>
                            <p>Location: {mentor.location}</p>
                        </Col>
                        <Col sm={8} className='mentorTextBox'>
                            <p className='mentorText' style={mentor.style}>{improvedMsg}</p>
                        </Col>
                    </Row>
                )      
            })
            }

            <button className="submitBtn" onClick={handleSubmitBtn}>New Advice...</button>

        </Row>
    )
}

export default Mentors;
