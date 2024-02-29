import React, { useState, useEffect } from 'react';


// TextAreaField us imported to Item Create where it is used to gather user
// inpuut via textarea. It's passed multiple props which make the component
// modular and reusable.
const InputField = ({ id, placeholder, onChange, type, resetTrigger, maxLength }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value); // Pass value back to parent
    };

    useEffect(() => {
        setValue('')
    }, [resetTrigger])

    return (
        <textarea
            id={id}
            maxLength={maxLength}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            type={type}
        ></textarea>
    )
}

export default InputField;
