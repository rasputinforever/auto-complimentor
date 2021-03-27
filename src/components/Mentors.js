import React from "react";
import { Row, Col } from 'react-bootstrap';

// db array
const MentorsDB = require("../db/mentors.js")

class Mentors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            problem: props.problem,
            response: true
            }
    }

    handleSubmitBtn = event => {
        event.preventDefault();

        // set this state and parent state
        this.setState({ 
            username: '',
            problem: '',
            response: false, 
            }, function () {
                this.props.onUpdate(this.state)
            }
        )
        
    };

    render() {
        return (
            <Row className='mentorContainer'>
                {
                MentorsDB.map((mentor) => {
                    const imgSrc = '/images/' + mentor.image
                    const mentorMessage = messageRandomizer(mentor.messages)
                    const newMessage = transformMessage(mentorMessage, this.state.username, this.state.problem)
                    return (
                        <Row className='mentorArticle' key={mentor.name}> 
                            <Col sm={3} className='mentorCard'>
                                <img src={imgSrc} alt={mentor.name} className='mentorImg' />
                                <h3>{mentor.name}</h3>
                                <p>Age: {mentor.age}</p>
                                <p>Location: {mentor.location}</p>
                            </Col>
                            <Col sm={8} className='mentorTextBox'>
                                <p className='mentorText' style={mentor.style}>{newMessage}</p>
                            </Col>
                        </Row>
                    )      
                })
                }

                <button onClick={this.handleSubmitBtn}>New Advice...</button>

            </Row>
        )
    }
}

export default Mentors;

// helpers: can these be refactored somehow?
function messageRandomizer(msgArr) {

    const msg = msgArr[Math.floor(Math.random() * msgArr.length)]

    return msg
}

function transformMessage(msg, name, prob) {
    
    let msgArr = msg.split(" ")

    msgArr.forEach(word => {
        if (word.indexOf('userName') > -1) {

            const newName = name + word.slice("userName".length)
            msgArr[msgArr.indexOf(word)] = newName

        } else if (word.indexOf('userProblem') > -1) {

            const newProb = prob + word.slice("userProblem".length)
            msgArr[msgArr.indexOf(word)] = newProb

        }
    })

    return msgArr.join(" ")
}