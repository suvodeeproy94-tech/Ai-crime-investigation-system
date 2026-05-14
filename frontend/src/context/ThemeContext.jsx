// This file manages light mode and dark mode state for the whole frontend.
// This line imports createContext so we can share theme data with all components.
import { createContext, useContext, useEffect, useState } from 'react'

// This line creates a shared theme context object.
const ThemeContext = createContext(null)

// This part reads saved theme from browser storage and returns a safe default value.
function getSavedTheme() {
    // This line reads theme value from local storage.
    const storedTheme = localStorage.getItem('theme')

    // This line returns dark mode when it was saved before.
    if (storedTheme === 'dark') {
        return 'dark'
    }

    // This line returns light mode when it was saved before.
    if (storedTheme === 'light') {
        return 'light'
    }

    // This line returns light mode when no valid saved value exists.
    return 'light'
}

// This part provides theme value and toggle function to all child components.
function ThemeProvider({ children }) {
    // This line creates theme state and loads saved value on first render.
    const [theme, setTheme] = useState(getSavedTheme)

    // This effect applies theme class to body and saves theme to local storage.
    useEffect(() => {
        // This line adds dark mode class when theme is dark.
        document.body.classList.toggle('dark-mode', theme === 'dark')
        // This line saves current theme value for next browser visit.
        localStorage.setItem('theme', theme)
    }, [theme])

    // This function switches theme between light and dark.
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    // This line returns provider wrapper with theme data for all children.
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// This hook gives easy access to theme data inside components.
function useTheme() {
    // This line reads current context value.
    const context = useContext(ThemeContext)

    // This line throws clear error if hook is used outside provider.
    if (!context) {
        throw new Error('useTheme must be used inside ThemeProvider')
    }

    // This line returns theme and toggle function.
    return context
}

// This line exports provider and hook for use in other files.
export { ThemeProvider, useTheme }
