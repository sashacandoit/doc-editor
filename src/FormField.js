import React from "react";
import "./FormField.css"

const FormField = ({wordType, label, placeholder, value, id, handleChange}) => {
    return (
        <div className="FormField">
            <label className="FormField-label" htmlFor={wordType}>{label}</label>
            <input className="FormField-input"
                id={id}
                type="text"
                name={wordType}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            <br></br>
        </div>
    )
}

export default FormField;