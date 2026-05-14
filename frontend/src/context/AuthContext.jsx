// This file stores login state for the frontend. It keeps the current user token login and logout functions available to all pages.
// This line imports React tools for creating and storing authentication state
import { createContext, useState } from 'react'

// This part creates a context that will hold the current user and auth actions
export const AuthContext = createContext()

// This line reads the saved user from browser storage when the app starts
const getSavedUser = () => {
    // This part protects the app from broken JSON in local storage
    try {
        // This line reads the stored user string from local storage
        const savedUser = localStorage.getItem('user')
        // This line returns no user when storage has no saved user
        if (!savedUser) {
            return null
        }

        // This line changes the stored user string back into an object
        return JSON.parse(savedUser)
    } catch {
        // This line removes invalid user data when parsing fails
        localStorage.removeItem('user')
        // This line removes the token too so the session is fully cleared
        localStorage.removeItem('token')
        // This line returns no user after clearing invalid saved data
        return null
    }
}

// This part wraps the application and provides authentication state to all children
export const AuthProvider = ({ children }) => {

    // This part keeps the current logged in user and loads any saved user on startup
    const [user, setUser] = useState(getSavedUser)

    // This line saves login data after a successful login request
    const login = (data) => {
        // Ignores invalid login responses that do not contain token and user data
        if (!data || !data.token || !data.user) {
            return
        }

        // This function updates React state with the logged in user
        setUser(data.user)
        // This line saves the token so API requests can stay authenticated after refresh
        localStorage.setItem('token', data.token)
        // This line saves the user profile so the app can restore it after refresh
        localStorage.setItem('user', JSON.stringify(data.user))
    }

    // Clears the current session
    const logout = () => {
        // This line removes the user from React state
        setUser(null)
        // This line removes the saved authentication token
        localStorage.removeItem('token')
        // This line removes the saved user profile
        localStorage.removeItem('user')
    }

    // This part gives user login and logout to every child component
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


