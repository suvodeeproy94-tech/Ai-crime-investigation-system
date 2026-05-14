// This file controls Vite settings for the frontend. It tells Vite to build and run the React app.
// This line imports Vite configuration helper
import { defineConfig } from 'vite'
// This line imports the React plugin so Vite can compile React files
import react from '@vitejs/plugin-react'

// This line makes the Vite configuration used by the frontend dev server and build
export default defineConfig({
  // This line turns on React support inside Vite
  plugins: [react()]
})

