import {createContext, useState} from "react"
const currentTheme = localStorage.getItem("theme");
const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [themeGlobal, setThemeGlobal] = useState(currentTheme)

    const changeTheme = (value) => {
        setThemeGlobal(value)
    }

    return<ThemeContext.Provider value={{themeGlobal, changeTheme}}  >{children}</ThemeContext.Provider>
}

export default ThemeContext