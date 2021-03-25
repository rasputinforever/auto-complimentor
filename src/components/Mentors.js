import React from "react";

const MentorsDB = require("../db/mentors.js")


const mentorsContent = MentorsDB.map((mentor) => {
        const imgSrc = '/images/' + mentor.image
        return (
            <div> 
                <img src={imgSrc} alt={mentor.name} />
                <h3>{mentor.name}</h3>
                <p>{mentor.messages[0]}</p>
            </div>
        )      
})

console.log(MentorsDB)

class Mentors extends React.Component {
    render() {
        return (
            <div>
                {mentorsContent}
            </div>
        )
    }
}

export default Mentors;

