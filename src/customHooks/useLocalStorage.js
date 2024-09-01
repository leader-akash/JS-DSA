// import { useState } from "react";

// export const useLocalStorage = (key, initialValue) => {

//     const getStoredValue = () => {
//         const storedValue = localStorage.getItem(key);
//         if(storedValue !== null){
//             return JSON.parse(storedValue)
//         }

//             return initialValue;
//     }

//     const [storedValue, setStoredValue] = useState(getStoredValue);

//     const setValue = (value) => {
//         setStoredValue(value);
//         localStorage.setItem(key, JSON.stringify(value));


//     }

//     return [storedValue, setValue]

// }

import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  // Retrieve from localStorage or fallback to the initial value
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  // Function to update localStorage and the state
  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}


