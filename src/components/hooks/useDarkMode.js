import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


    const useDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValues);
  
    useEffect(() => {
        // Update the document title using the browser API
        const body = document.querySelector("body");
        // element.classList.add("dark-mode");
        if (darkMode){
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    },[darkMode]);
    return [darkMode, setDarkMode];
};

export default useDarkMode;

