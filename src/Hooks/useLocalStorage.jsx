import { useState } from "react";

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
  // Retrieve value from localStorage (if exists), otherwise use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving from localStorage:", error);
      return initialValue;
    }
  });

  // Update localStorage and state when value changes
  const setValue = (value) => {
    try {
      // Allow value to be a function for lazy initialization
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      // Update state
      setStoredValue(valueToStore);
    } catch (error) {
      console.error("Error storing to localStorage:", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
