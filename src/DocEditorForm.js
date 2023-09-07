import React, { useState } from "react";
import FormField from "./FormField"
import { employmentContractFields } from "./EmploymentContractFields"
import "./DocEditorForm.css"

const songWords = employmentContractFields.words;
console.log(songWords);

const DocEditorForm = ({ getDocWords }) => {
    /** Set initial state for form */
    const [formData, setFormData] = useState(docWords);

    /** handle form value change as user edits inputs */
    const handleChange = e => {
        const { name, value } = e.target;

        // find the matching word by name in the object and update its value
        setFormData(data => data.map(wordsObj => (
            wordsObj.word === name ? { ...wordsObj, value } : wordsObj
        )));
    };

    /** handle form submission
     * clears fields and sends data to parent component
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        let formWords = formData.map(field => field.value);
        console.log(formWords);
        getDocWords(formWords);
        setFormData(docWords);
    };

    /** loop through list of words and generate form inputs */
    const renderFields = () => {
        return (
            <>
            {formData.map(wordsObj => (
                <FormField
                    wordType={wordsObj.word}
                    value={wordsObj.value}
                    key={wordsObj.id}
                    label={wordsObj.label}
                    placeholder={wordsObj.placeholder}
                    handleChange={handleChange} />
                )
                )}
            </>
        )
    }

    return (
        <form className="DocForm" onSubmit={handleSubmit}>
            {renderFields()}
            <button className="DocForm-btn">Generate Contract</button>
        </form>
        
    )
}

export default DocEditorForm;