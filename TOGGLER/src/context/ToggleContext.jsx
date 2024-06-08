import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useToggle = () => useContext(ToggleContext);

// eslint-disable-next-line react/prop-types
export const ToggleProvider = ({children}) => {

    const [theme,setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
        document.body.setAttribute('data-theme',theme);
        console.log(theme);
    }

    return(
        <ToggleContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ToggleContext.Provider>
    )
}

