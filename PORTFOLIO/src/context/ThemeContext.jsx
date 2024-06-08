/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect(()=> {
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme);
    },[theme]);
    
    const toggleTheme = () =>{
        setTheme((prev) => (prev === 'light' ? 'dark': 'light'));
    };

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

