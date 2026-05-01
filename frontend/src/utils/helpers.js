// This file stores small helper functions for the frontend. These helpers can be reused in pages and components.
// Formats a date value into a readable local date string
export const formatDate = (date) => {
    // This line changes the input into a Date object and formats it for display
    return new Date(date).toLocaleDateString()
}

