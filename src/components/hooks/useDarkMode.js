import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);
  
    useEffect(() => {
        // Update the document title using the browser API
        const body = document.querySelector("body");
        element.classList.add("dark-mode");
        if (darkMode){
            body.classList.add("darkmode");
        } else {
            body.classList.add("darkmode");
        }
      },[]);

    // const handleChanges = e => {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.value
    //   });
    };