import React from "react";
import "./MadLibStory.css"

const EmploymentContract = ({ storyWords }) => {
    /** use the array of words passed down from parent component and form and replace default props
     */
    return (
        <span className="MadLibStory">
            You know Dasher and Dancer
            <br></br>
            and {storyWords[0] || "Prancer"} and Vixen,
            <br></br>
            {storyWords[1] || "Comet"} and {storyWords[2] || "Cupid"} and {storyWords[3] || "Donner"} and Blitzen
            <br></br>
            But do you recall
            <br></br>
            The most {storyWords[4] || "famous"} reindeer of all?
            <br></br>
            <br></br>
            Rudolph the {storyWords[5] || "red"}-nosed reindeer
            <br></br>
            Had a very {storyWords[6] || "shiny"} nose,
            <br></br>
            And if you ever saw it,
            <br></br>
            You would even say it glows,
            <br></br>
            <br></br>
            All of the other reindeer
            <br></br>
            Used to {storyWords[7] || "laugh"} and call him names,
            <br></br>
            They never let poor Rudolph
            <br></br>
            {storyWords[8] || "play"} in any reindeer games.
            <br></br>
            <br></br>
            Then one {storyWords[9] || "foggy"} {storyWords[10] || "Christmas Eve"},
            <br></br>
            Santa came to say,
            <br></br>
            “Rudolph with your nose so bright,
            <br></br>
            Won’t you {storyWords[11] || "guide"} my {storyWords[12] || "sleigh"} tonight?”
            <br></br>
            <br></br>
            Then how the reindeer {storyWords[13] || "loved"} him,
            <br></br>
            As they {storyWords[14] || "shouted out"} with glee,
            <br></br>
            “Rudolph the {storyWords[15] || "red"}-nosed reindeer,
            <br></br>
            You’ll go down in history!”
        </span>
    )
};


export default EmploymentContract;