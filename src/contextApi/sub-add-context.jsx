import React, { createContext, useContext, useState } from 'react';

const SubAddContext = createContext(null);

const SubAddContextProvider = ({ children }) => {
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);

    const handleValue = (type) => {
        
        if (type === 'add') {
            setOutput(output + input);
        } else if (type === 'less') {
            setOutput(output - input);
        }
        setInput(0);
    };

    return (
        <SubAddContext.Provider value={{ input, output, setInput, setOutput, handleValue }}>
            {children}
        </SubAddContext.Provider>
    );
};

const useSubAdd = () => useContext(SubAddContext);

export { useSubAdd, SubAddContextProvider };
