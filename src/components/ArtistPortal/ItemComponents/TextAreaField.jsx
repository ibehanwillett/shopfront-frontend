import React, { useState } from 'react';

const InputField = ({ id, placeholder, onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value); // Pass value back to parent
    };

    return (
        <textarea 
            id={id}
            placeholder={placeholder} 
            value={value} 
            onChange={handleChange}
        ></textarea>
    );
};

export default InputField;
