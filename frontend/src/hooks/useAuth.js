// This file gives components an easy way to read login data. It returns the authentication context in one small hook.
// This line imports useContext so components can read context values
import { useContext } from 'react'
// This line imports the authentication context object
import { AuthContext } from '../context/AuthContext'

// This part creates a small helper hook for accessing authentication data
const useAuth = () => {
    // This line returns the current user login and logout values from context
    return useContext(AuthContext)
}

// This line makes the hook so any component can use authentication state
export default useAuth

