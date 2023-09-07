import React, { useState } from "react";
import MadLibForm from "./DocEditorForm";
import EmploymentContract from "./EmploymentContract";
import "./DocEditor.css"

const MadLib = () => {
    /** initialize state for madlib words */
    const [words, setWords] = useState([]);

    /** takes form data and adds new words to state */
    const getSongWords = (formWords) => {
        setWords(...words, {...formWords})
    }
    return (
        <div className="MadLib">
            <h1 className="MadLib-title">Rudolph the Madlibbed Reindeer</h1>
            <h4 className="MadLib-subtitle">Fill in the blanks below to generate your song!</h4>
            <MadLibForm getSongWords={getSongWords} />
            <EmploymentContract storyWords={words} />
        </div>
    )
}


export default MadLib;