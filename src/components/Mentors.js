import React from "react";

const mentorDB = require("../db/mentors.js")


class Mentors extends React.Component {
    render() {
        return (
            <Mentor img='test.png' name='test' message='Hello'></Mentor>
        )
    }
}

export default Mentors;



function Mentor(props) {
    const imgURL = '../../public/images/' + props.img;

    return (
        <div>
            <img src={imgURL} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
        </div>
    );
}