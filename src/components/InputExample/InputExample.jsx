import { useState, useEffect } from 'react';

function InputExample() {
    const [firstName, setFirstName] = useState('Glonel');
    // We are binding the variable to an input; Data-binding
    return (
        <>
            <h2>Input Example</h2>
            <p>You have typed: {firstName}</p>
            <input 
                value={firstName} 
                type="text" 
                // This event happens when the field changes
                onChange={(e) => setFirstName(e.target.value)}

            />
        </> 
    );
};


export default InputExample;