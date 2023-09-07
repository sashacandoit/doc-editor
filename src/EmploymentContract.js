import React from "react";
import "./EmploymentContract.css"

const EmploymentContract = ({ docWords }) => {
    /** use the array of words passed down from parent component and form and replace default props
     */
    return (
        <span className="EmploymentContract">
            You know Dasher and Dancer
            <br></br>
            and {docWords[0] || "Prancer"} and Vixen,
            <br></br>
            {docWords[1] || "Comet"} and {storyWords[2] || "Cupid"} and {storyWords[3] || "Donner"} and Blitzen
            <br></br>
            But do you recall
            <br></br>
            The most {docWords[4] || "famous"} reindeer of all?
            <br></br>
            <br></br>
            Rudolph the {docWords[5] || "red"}-nosed reindeer
            <br></br>
            Had a very {docWords[6] || "shiny"} nose,
            <br></br>
            And if you ever saw it,
            <br></br>
            You would even say it glows,
            <br></br>
            <br></br>
            All of the other reindeer
            <br></br>
            Used to {docWords[7] || "laugh"} and call him names,
            <br></br>
            They never let poor Rudolph
            <br></br>
            {docWords[8] || "play"} in any reindeer games.
            <br></br>
            <br></br>
            Then one {docWords[9] || "foggy"} {docWords[10] || "Christmas Eve"},
            <br></br>
            Santa came to say,
            <br></br>
            “Rudolph with your nose so bright,
            <br></br>
            Won’t you {docWords[11] || "guide"} my {docWords[12] || "sleigh"} tonight?”
            <br></br>
            <br></br>
            Then how the reindeer {docWords[13] || "loved"} him,
            <br></br>
            As they {docWords[14] || "shouted out"} with glee,
            <br></br>
            “Rudolph the {docWords[15] || "red"}-nosed reindeer,
            <br></br>
            You’ll go down in history!”
        </span>
    )
};


export default EmploymentContract;