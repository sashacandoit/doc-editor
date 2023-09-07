import React, { useState } from "react";
import DocEditorForm from "./DocEditorForm";
import EmploymentContract from "./EmploymentContract";
import "./DocEditor.css"

const DocEditor = () => {
    /** initialize state for doc words */
    const [words, setWords] = useState([]);

    /** takes form data and adds new words to state */
    const getDocWords = (formWords) => {
        setWords(...words, {...formWords})
    }
    return (
        <div className="MadLib">
            <h1 className="Doc-title">Employment Contract</h1>
            <h4 className="Doc-subtitle">Fill in the blanks below to add to the Employment Contract</h4>
            <DocEditorForm getSongWords={getDocWords} />
            <EmploymentContract storyWords={words} />
        </div>
    )
}


export default DocEditor;