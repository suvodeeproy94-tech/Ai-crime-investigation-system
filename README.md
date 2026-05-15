# AI-Powered Crime Investigation System

![AI-Powered Crime Investigation System Synopsis](assets/ai-powered-crime-investigation-system.png)

## About This Project

This project is an AI-based crime investigation system made with the MERN stack.

MERN means:

1. MongoDB for database
2. Express.js for backend API
3. React.js for frontend
4. Node.js for backend server

The project helps users, police officers, and admin users manage crime investigation work in one place. It supports complaint submission, FIR creation, case management, evidence handling, suspect tracking, reports, notifications, live chat, activity logs, Google Maps crime mapping, OTP security, and Groq AI based analysis.

This project is made for learning, college project work, and demonstration purpose.

## Live Project Links

The project is deployed online.

Frontend live website:

```text
https://ai-crime-investigation-system.vercel.app
```

Backend live API:

```text
https://ai-crime-investigation-backend.onrender.com
```

Backend check URL:

```text
https://ai-crime-investigation-backend.onrender.com
```

If the backend is working, it shows:

```text
AI Based Crime Investigation System API is running
```

Important: these links are for this deployed project. If you deploy your own copy, your links will be different.

## Main Goal

The main goal of this project is to make crime investigation work easier, faster, and more organized.

The system helps to:

1. Store crime related data safely
2. Manage complaints and FIR records
3. Track investigation cases
4. Upload and manage evidence
5. Manage suspect profiles
6. Use AI to analyze crime notes
7. Generate AI based crime reports
8. Show crime locations on Google Maps
9. Track important user actions using activity logs
10. Improve communication using chat and live updates

## User Roles

The project has three main roles.

### 1. User

A normal user can:

1. Register and login
2. Submit a complaint
3. View their complaint or case updates
4. View notifications
5. Use chat with allowed users
6. Setup two-factor authentication

### 2. Police

A police user can:

1. Create FIR records
2. Manage cases
3. Upload evidence
4. Manage suspects
5. Create investigation reports
6. Use Groq AI for crime text analysis
7. Generate AI based crime reports
8. View notifications
9. Use chat
10. Join live meetings

### 3. Admin

An admin user can:

1. Manage users
2. View and manage all main records
3. Create and close live meetings
4. View activity logs
5. Use AI features
6. Access dashboard analytics
7. Manage system level work

## Main Features

### 1. Authentication

The project has login and register features.

It uses JWT authentication. After login, the backend sends a token. The frontend stores this token and sends it with API requests.

The register page has role selection.

Available roles during registration:

1. User
2. Police
3. Admin

For a real production system, admin and police accounts should be created only by a trusted admin. In this college demo project, role selection is kept on the register page so all roles can be tested easily.

### 2. Role Based Access

Every user has a role:

1. user
2. police
3. admin

The frontend and backend both check the role before showing or allowing important actions.

### 3. Google Login

The project supports Google login.

Google Client ID is used to verify the Google login token.

### 4. Two-Factor Authentication

The project supports OTP based two-factor authentication.

Users can setup OTP using an authenticator app like:

1. Google Authenticator
2. Microsoft Authenticator
3. Authy

After entering email and password, the OTP page shows:

1. QR code
2. Secret key
3. OTP input field

The user should scan the QR code in an authenticator app. Then the user should enter the 6 digit OTP code shown in the app.

### 5. Complaint System

Normal users can submit complaints.

Each complaint stores:

1. Title
2. Description
3. Location
4. Created user
5. Status
6. Assigned police officer

### 6. FIR Management

Police and admin users can create FIR records from complaints.

Each FIR stores:

1. FIR title
2. Description
3. Location
4. Status
5. Linked complaint
6. Created police/admin user
7. Status history

### 7. Case Management

Police and admin users can create and update cases.

Each case stores:

1. Case title
2. Description
3. Location
4. Latitude and longitude for map
5. Status
6. Priority
7. Assigned user
8. Related suspects
9. Related evidence
10. Status history

### 8. Evidence Management

Police and admin users can upload and manage evidence.

Evidence can include:

1. Image
2. Video
3. PDF
4. Other uploaded files

Each evidence record can be linked with a case and suspect.

### 9. Suspect Management

Police and admin users can manage suspect profiles.

Each suspect record stores:

1. Name
2. Age
3. Gender
4. Last seen location
5. Status
6. Related cases

### 10. Report Management

Users can create, view, update, and delete reports based on permission.

Reports can be linked with:

1. Case
2. FIR

### 11. AI Crime Text Analysis

Police and admin users can paste crime notes and ask Groq AI to analyze the text.

The AI can help with:

1. Case summary
2. Possible leads
3. Missing details
4. Next investigation steps

Important rule: AI should not invent facts.

### 12. AI Friendly Crime Report

Police and admin users can generate a clean crime report using AI.

The user enters raw crime notes. AI converts it into a structured report with clear sections.

The generated report can be reviewed and saved.

### 13. AI Logs

AI request history is saved in the database.

AI logs store:

1. User who used AI
2. User role
3. Input text
4. AI output
5. Status
6. Error message if failed

### 14. Notifications

The system creates notifications for important updates.

Example:

1. FIR status update
2. New evidence added
3. Case update

### 15. Real-Time Updates With Socket.io

Socket.io is used for live updates.

It supports:

1. Live chat messages
2. Live notification updates
3. Live case refresh
4. Live activity log refresh

### 16. Chat System

Users can chat based on role permission.

Example:

1. User can chat with police
2. Police can chat with user or admin
3. Admin can chat with police

### 17. Live Meeting

Admin can create live meeting rooms.

Police and admin users can join active meetings.

### 18. Crime Mapping With Google Maps

The project has a Crime Map page.

Cases with latitude and longitude are shown on Google Maps.

This helps to see crime locations visually.

### 19. Activity Logs And Audit Tracking

The project stores important user actions in activity logs.

Activity logs can show:

1. Who did the action
2. User role
3. Action type
4. Module name
5. Description
6. Date and time

Example logged actions:

1. Create case
2. Update case
3. Delete case
4. Create FIR
5. Upload evidence
6. Create report
7. Send chat message
8. Create meeting

### 20. Dashboard And Analytics

The dashboard shows useful summary data.

It can show:

1. Total FIRs
2. Total cases
3. Total evidence
4. Total suspects
5. Unread alerts
6. Status charts
7. Activity charts

### 21. Dark Mode

The project supports light mode and dark mode.

Users can switch mode from the top navbar.

## Technology Stack

### Frontend

1. React.js
2. Vite
3. Tailwind CSS
4. Axios
5. React Router
6. Socket.io Client
7. Google OAuth
8. Google Maps JavaScript API
9. Three.js for 3D logo

### Backend

1. Node.js
2. Express.js
3. MongoDB
4. Mongoose
5. JWT
6. Bcrypt
7. Multer
8. Speakeasy
9. QRCode
10. Socket.io
11. Groq AI API
12. Google Auth Library

### Database

MongoDB is used as the database.

Main collections:

1. users
2. complaints
3. firs
4. cases
5. evidences
6. suspects
7. reports
8. notifications
9. chatmessages
10. meetings
11. ailogs
12. activitylogs

## Folder Structure

```text
project-root
|-- assets
|   |-- project synopsis image
|-- backend
|   |-- config
|   |-- controllers
|   |-- middleware
|   |-- models
|   |-- routes
|   |-- scripts
|   |-- utils
|   |-- server.js
|   |-- package.json
|-- frontend
|   |-- public
|   |-- src
|   |   |-- components
|   |   |-- context
|   |   |-- hooks
|   |   |-- pages
|   |   |-- services
|   |   |-- App.jsx
|   |   |-- main.jsx
|   |-- package.json
|-- README.md
```

## Requirements

Before running the project, install these tools:

1. Node.js
2. npm
3. MongoDB Community Server
4. MongoDB Compass
5. Git
6. Google Cloud account for Google login and Google Maps
7. Groq API key for AI features

## Package Installation Guide

This project already has `package.json` files in both backend and frontend folders.

So you do not need to install every package one by one. You only need to run `npm install`.

### Install Backend Packages

Open terminal in the project folder and run:

```bash
cd backend
npm install
```

This command installs all backend packages written in `backend/package.json`.

Main backend packages:

1. `express` for backend API server
2. `mongoose` for MongoDB connection
3. `jsonwebtoken` for login token
4. `bcryptjs` for password hashing
5. `cors` for frontend backend connection
6. `dotenv` for reading `.env` file
7. `multer` for file upload
8. `speakeasy` for OTP two-factor authentication
9. `qrcode` for OTP QR code
10. `socket.io` for real-time updates
11. `google-auth-library` for Google login verification
12. `groq-sdk` for Groq AI support
13. `nodemon` for development server restart

### Install Frontend Packages

Open terminal in the project folder and run:

```bash
cd frontend
npm install
```

This command installs all frontend packages written in `frontend/package.json`.

Main frontend packages:

1. `react` for frontend UI
2. `react-dom` for rendering React app
3. `react-router-dom` for page routing
4. `axios` for API calls
5. `socket.io-client` for real-time frontend connection
6. `@react-oauth/google` for Google login button
7. `three` for 3D logo
8. `vite` for frontend development server
9. `tailwindcss` for styling

### If Any Package Is Missing

Normally this is not needed. But if any package is missing, install it from the correct folder.

Backend example:

```bash
cd backend
npm install socket.io
```

Frontend example:

```bash
cd frontend
npm install socket.io-client
```

After installing packages, restart the server.

## Environment Variables Guide

This project needs two `.env` files.

One file is for backend:

```text
backend/.env
```

One file is for frontend:

```text
frontend/.env
```

Do not upload these files to GitHub because they contain private keys.

### Backend `.env` Example

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.1-8b-instant
GOOGLE_CLIENT_ID=your_google_login_client_id
CORS_ORIGIN=http://localhost:5173
```

### Frontend `.env` Example

```env
VITE_GOOGLE_CLIENT_ID=your_google_login_client_id
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### What Each Key Means

1. `PORT`

This is the backend server port. This project uses `5000`.

2. `MONGO_URI`

This is your MongoDB connection link. The backend uses it to connect with the database.

3. `JWT_SECRET`

This is a private text used to create and check login tokens.

4. `GROQ_API_KEY`

This key is used for Groq AI features.

5. `GROQ_MODEL`

This is the Groq model name used by the project.

6. `GOOGLE_CLIENT_ID`

This is used by backend to verify Google login.

7. `CORS_ORIGIN`

This is the frontend website URL that is allowed to call the backend.

For local use:

```env
CORS_ORIGIN=http://localhost:5173
```

For deployed Vercel frontend:

```env
CORS_ORIGIN=https://ai-crime-investigation-system.vercel.app
```

8. `VITE_GOOGLE_CLIENT_ID`

This is used by frontend to show and run Google login.

9. `VITE_GOOGLE_MAPS_API_KEY`

This is used by frontend to show Google Maps on the Crime Map page.

10. `VITE_API_BASE_URL`

This is the backend API URL used by frontend.

For local use:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

For deployed Render backend:

```env
VITE_API_BASE_URL=https://ai-crime-investigation-backend.onrender.com/api
```

11. `VITE_SOCKET_URL`

This is the backend socket URL used for live chat and live updates.

For local use:

```env
VITE_SOCKET_URL=http://localhost:5000
```

For deployed Render backend:

```env
VITE_SOCKET_URL=https://ai-crime-investigation-backend.onrender.com
```

## How To Create Required API Keys

This project uses these important tools and services:

1. Local MongoDB for database
2. Groq for AI
3. Google Cloud for Google Login and Google Maps

### 1. How To Use MongoDB Compass

This project uses local MongoDB with MongoDB Compass.

MongoDB Compass is not the database server. It is a visual tool to see your MongoDB data.

You need two things:

1. MongoDB Community Server
2. MongoDB Compass

Steps:

1. Install MongoDB Community Server on your computer.
2. Install MongoDB Compass.
3. Start MongoDB service if it is not already running.
4. Open MongoDB Compass.
5. Connect with this local connection:

```text
mongodb://localhost:27017
```

or:

```text
mongodb://127.0.0.1:27017
```

6. In the project backend `.env`, use this MongoDB URL:

```env
MONGO_URI=mongodb://127.0.0.1:27017/crime_investigation_system
```

7. Start the backend server.
8. The database will be created automatically when data is inserted.

The database name is:

```text
crime_investigation_system
```

You can see these collections in MongoDB Compass:

1. users
2. complaints
3. firs
4. cases
5. evidences
6. suspects
7. reports
8. notifications
9. chatmessages
10. meetings
11. ailogs
12. activitylogs

If the database is empty, run demo seed:

```bash
cd backend
npm run seed:advanced
```

This will add demo cases, logs, notifications, chat messages, FIR, evidence, suspects, and reports.

MongoDB Atlas is optional. You do not need Atlas for this local project.

Use Atlas only if you want to host the database online.

### 2. How To Create Groq API Key

Groq API key is needed for AI analysis and AI report generation.

Steps:

1. Open Groq Console:

```text
https://console.groq.com/
```

2. Login or create an account.
3. Go to API Keys.
4. Click Create API Key.
5. Copy the key.
6. Paste it in `backend/.env`.

Example:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.1-8b-instant
```

Do not share your Groq API key.

### 3. How To Create Google Login Client ID

Google Client ID is needed for Google Login.

Steps:

1. Open Google Cloud Console:

```text
https://console.cloud.google.com/
```

2. Create a new project or select your existing project.
3. Go to APIs and Services.
4. Open OAuth consent screen.
5. Select External for normal testing.
6. Fill app name, email, and required details.
7. Save the consent screen.
8. Go to Credentials.
9. Click Create Credentials.
10. Select OAuth client ID.
11. Select Web application.
12. Add authorized JavaScript origin:

```text
http://localhost:5173
```

13. Add authorized redirect URI if Google asks:

```text
http://localhost:5173
```

14. Click Create.
15. Copy the Client ID.
16. Paste it in both backend and frontend `.env` files.

Backend:

```env
GOOGLE_CLIENT_ID=your_google_login_client_id
```

Frontend:

```env
VITE_GOOGLE_CLIENT_ID=your_google_login_client_id
```

Remember: Google Client ID is for login only. It is not for Google Maps.

### 4. How To Create Google Maps API Key

Google Maps API key is needed for the Crime Map page.

Steps:

1. Open Google Cloud Console:

```text
https://console.cloud.google.com/
```

2. Create or select a project.
3. Make sure billing is enabled for the project.
4. Go to APIs and Services.
5. Go to Library.
6. Search for:

```text
Maps JavaScript API
```

7. Open it.
8. Click Enable.
9. Go to Credentials.
10. Click Create Credentials.
11. Select API Key.
12. Copy the generated API key.
13. Paste it in `frontend/.env`.

Example:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

For safety, restrict the key.

Application restriction:

```text
Websites
```

Allowed websites for local use:

```text
http://localhost:5173/*
http://127.0.0.1:5173/*
```

API restriction:

```text
Maps JavaScript API
```

Remember: Google Maps API key is for map only. It is not for Google Login.

## Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install backend packages:

```bash
npm install
```

Create a `.env` file inside the `backend` folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.1-8b-instant
GOOGLE_CLIENT_ID=your_google_login_client_id
CORS_ORIGIN=http://localhost:5173
```

Start backend server:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

## Frontend Setup

Go to the frontend folder:

```bash
cd frontend
```

Install frontend packages:

```bash
npm install
```

Create a `.env` file inside the `frontend` folder.

Example:

```env
VITE_GOOGLE_CLIENT_ID=your_google_login_client_id
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

Start frontend server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## Google Maps Setup

For the Crime Map page, you need Google Maps API key.

Steps:

1. Open Google Cloud Console
2. Create a project
3. Enable Maps JavaScript API
4. Create an API key
5. Add the key in `frontend/.env`

Example:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

For local development, restrict the key to:

```text
http://localhost:5173/*
http://127.0.0.1:5173/*
```

## Groq AI Setup

For AI analysis and AI report generation, you need a Groq API key.

Add it in `backend/.env`:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.1-8b-instant
```

## Google Login Setup

For Google login, you need Google OAuth Client ID.

Add the same client id in both files.

Backend `.env`:

```env
GOOGLE_CLIENT_ID=your_google_login_client_id
```

Frontend `.env`:

```env
VITE_GOOGLE_CLIENT_ID=your_google_login_client_id
```

## How To Use The Project

You can use this project in two ways:

1. Use the live deployed website.
2. Run the project locally on your computer.

### Use The Live Website

Open this link:

```text
https://ai-crime-investigation-system.vercel.app
```

Then follow these steps:

1. Click Create account if you are a new user.
2. Enter full name, email, password, and select role.
3. Login with the same email and password.
4. If OTP page opens, scan the QR code using an authenticator app.
5. Enter the 6 digit OTP code.
6. After login, use the sidebar to open pages based on your role.

Use a new email when testing registration. If the email already exists, registration will fail.

### Run The Project Locally

### Step 1: Start Backend

```bash
cd backend
npm run dev
```

### Step 2: Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

### Step 3: Open Browser

```text
http://localhost:5173
```

### Step 4: Register Or Login

Create an account or login with an existing account.

During registration, select one role:

1. User
2. Police
3. Admin

After login, if the OTP screen opens, scan the QR code first. Then enter the 6 digit OTP code from your authenticator app.

### Step 5: Use Features Based On Role

Use the sidebar to open:

1. Dashboard
2. Create FIR
3. Evidence
4. Cases
5. Crime Map
6. Suspects
7. Reports
8. Notifications
9. Chat
10. Live Meeting
11. AI Analysis
12. AI Logs
13. Activity Logs
14. Users

Some pages are visible only for selected roles.

## Deployment Guide Using Vercel, Render, And MongoDB Atlas

This is the easiest deployment method for this project.

Use:

1. Vercel for frontend
2. Render for backend
3. MongoDB Atlas for online database

MongoDB Compass is only for local database viewing. It cannot host your database online. For a live website, use MongoDB Atlas or another online MongoDB server.

### Step 1: Create MongoDB Atlas Database

First create an online MongoDB database.

1. Open this website:

```text
https://cloud.mongodb.com
```

2. Login with your MongoDB account.
3. If MongoDB asks to create an organization, create it.
4. Click Create Project.
5. Enter project name:

```text
Crime Investigation System
```

6. Do not add extra members if this is your personal project.
7. Click Create Project.
8. On Project Overview, click Create or Create Cluster.
9. Choose the free plan.

Use:

```text
Free or M0
```

10. Choose provider:

```text
AWS
```

11. Choose region near you.

Example:

```text
Mumbai
```

If Mumbai is not available, choose Singapore.

12. Keep cluster name as:

```text
Cluster0
```

13. Click Create Deployment or Create Cluster.
14. MongoDB will ask you to create a database user.
15. Enter a username.

Example:

```text
crimeuser
```

16. Enter a strong password.
17. Save username and password in a safe place.
18. Click Create Database User.
19. MongoDB will ask for network access.
20. For local testing, click Add My Current IP Address.
21. For Render deployment, add this IP access:

```text
0.0.0.0/0
```

22. Click Confirm.
23. Wait until the cluster is ready.
24. Click Connect.
25. Select Drivers.
26. Select Driver:

```text
Node.js
```

27. Copy the connection string.
28. Replace `<db_password>` with your real database password.
29. Add the database name after `.net/`.

Example:

```text
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/crime_investigation_system?retryWrites=true&w=majority&appName=Cluster0
```

Do not put this connection string in GitHub.

Use this connection string later in Render as:

```env
MONGO_URI=your_final_mongodb_connection_string
```

### Step 2: Deploy Backend On Render

Now deploy the backend API.

1. Open this website:

```text
https://dashboard.render.com
```

2. Login with GitHub.
3. Click New.
4. Click Web Service.
5. Select your GitHub repository.

For this project:

```text
Ai-crime-investigation-system
```

6. If Render asks permission, allow access to the repository.
7. Fill the service settings.

Use these settings:

```text
Name: ai-crime-investigation-backend
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: npm start
Plan: Free
```

8. Scroll to Environment Variables.
9. Add the variables one by one.

Add these Render environment variables:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_text
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.1-8b-instant
GOOGLE_CLIENT_ID=your_google_login_client_id
CORS_ORIGIN=https://your-vercel-frontend-url
```

For first deployment, if frontend is not ready yet, you can use:

```env
CORS_ORIGIN=http://localhost:5173
```

After Vercel frontend is ready, change it to your Vercel link.

Important:

1. Do not add `PORT` in Render.
2. Do not upload backend `.env` to GitHub.
3. Render environment variables replace your backend `.env` file online.

10. Click Create Web Service.
11. Wait for Render to install packages and start the backend.
12. When deployment finishes, Render will show a backend URL.

After deployment, backend URL will look like this:

```text
https://ai-crime-investigation-backend.onrender.com
```

Open the backend URL. If it works, it will show:

```text
AI Based Crime Investigation System API is running
```

If the backend does not start:

1. Open Render service.
2. Click Logs.
3. Read the red error.
4. Check `MONGO_URI`, `JWT_SECRET`, `GROQ_API_KEY`, and `GOOGLE_CLIENT_ID`.

To redeploy backend after code changes:

1. Push your code to GitHub.
2. Open Render backend service.
3. Click Manual Deploy.
4. Click Deploy latest commit.
5. Wait until it becomes live.

### Step 3: Deploy Frontend On Vercel

Now deploy the React frontend.

1. Open this website:

```text
https://vercel.com
```

2. Login with GitHub.
3. Click Add New.
4. Click Project.
5. Select your GitHub repository.

For this project:

```text
Ai-crime-investigation-system
```

6. Make sure you are not selecting a separate wrong frontend-only repo.
7. Set the project name.

Example:

```text
ai-crime-investigation-system
```

8. Set Root Directory.

Use:

```text
frontend
```

9. Open Build and Output Settings.

Use these settings:

```text
Root Directory: frontend
Framework Preset: Vite or Other
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

10. Open Environment Variables.
11. Add all frontend variables.

Add these Vercel environment variables:

```env
VITE_API_BASE_URL=https://your-render-backend-url/api
VITE_SOCKET_URL=https://your-render-backend-url
VITE_GOOGLE_CLIENT_ID=your_google_login_client_id
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

For this project deployment, the values are:

```env
VITE_API_BASE_URL=https://ai-crime-investigation-backend.onrender.com/api
VITE_SOCKET_URL=https://ai-crime-investigation-backend.onrender.com
```

Important:

1. `VITE_API_BASE_URL` must end with `/api`.
2. `VITE_SOCKET_URL` must not end with `/api`.
3. Do not add `MONGO_URI` in Vercel.
4. Do not add `JWT_SECRET` in Vercel.
5. Do not add `GROQ_API_KEY` in Vercel.

12. Click Deploy.
13. Wait until Vercel shows Ready.
14. Copy the frontend domain.

After deployment, frontend URL will look like this:

```text
https://ai-crime-investigation-system.vercel.app
```

To redeploy frontend after code changes:

1. Push your code to GitHub.
2. Open Vercel project.
3. Click Deployments.
4. Wait for automatic deployment.
5. If it does not deploy, click the three dots on latest deployment.
6. Click Redeploy.
7. If Vercel asks about cache, choose do not use cache.

### Step 4: Update Render CORS

After Vercel gives the frontend link, go back to Render.

1. Open:

```text
https://dashboard.render.com
```

2. Click your backend service.
3. Click Environment.
4. Find:

```env
CORS_ORIGIN
```

5. Set it to your Vercel frontend URL.

Set:

```env
CORS_ORIGIN=https://your-vercel-frontend-url
```

For this project deployment:

```env
CORS_ORIGIN=https://ai-crime-investigation-system.vercel.app
```

6. Click:

```text
Save, rebuild, and deploy
```

7. Wait until Render becomes live again.
8. Open the frontend website and test register/login.

### Step 5: Update Google Cloud Settings

Google Login and Google Maps must allow your live frontend URL.

1. Open this website:

```text
https://console.cloud.google.com
```

2. Select your Google Cloud project.
3. Go to APIs and Services.
4. Open Credentials.
5. Click your OAuth Client ID.
6. Under Authorized JavaScript origins, add your Vercel frontend URL.

```text
https://your-vercel-frontend-url
```

For this project deployment:

```text
https://ai-crime-investigation-system.vercel.app
```

7. Save the OAuth Client ID.
8. Go back to Credentials.
9. Click your Google Maps API key.
10. Under Website restrictions, add:

```text
https://your-vercel-frontend-url/*
```

For this project deployment:

```text
https://ai-crime-investigation-system.vercel.app/*
```

11. Under API restrictions, allow:

```text
Maps JavaScript API
```

12. Save the API key.

### Step 6: Test Live Project

Test these pages:

1. Register page
2. Login page
3. OTP QR page
4. Dashboard
5. Create complaint
6. Create FIR
7. Cases
8. Crime Map
9. Reports
10. Chat

### Common Deployment Problems

1. Register says failed

Check Render `CORS_ORIGIN`. It must match your Vercel frontend URL.

2. Frontend cannot call backend

Check Vercel `VITE_API_BASE_URL`. It must end with `/api`.

Correct:

```env
VITE_API_BASE_URL=https://ai-crime-investigation-backend.onrender.com/api
```

3. Live chat does not update

Check Vercel `VITE_SOCKET_URL`.

Correct:

```env
VITE_SOCKET_URL=https://ai-crime-investigation-backend.onrender.com
```

4. Google Maps is blank

Check `VITE_GOOGLE_MAPS_API_KEY`. Also check that Maps JavaScript API is enabled in Google Cloud.

5. Vercel shows 404 on `/register`

Make sure `frontend/vercel.json` exists. It should contain React route fallback rules.

6. MongoDB connection fails on Render

Check MongoDB Atlas Network Access. For Render free deployment, allow:

```text
0.0.0.0/0
```

Also check that username and password in `MONGO_URI` are correct.

## Deployment Guide Using AWS EC2 And S3

This section explains how to make the project live so other people can open it from the internet.

According to the project synopsis:

1. Backend should run on AWS EC2.
2. Frontend should be hosted on AWS S3.
3. Evidence files can later be stored in AWS S3.

Important: MongoDB Compass is only for viewing local database. It is not online hosting.

For live deployment, use one of these database options:

1. MongoDB Atlas for easiest online database.
2. MongoDB installed on EC2 if you do not want Atlas.

### Recommended Live Setup

For simple deployment, use this setup:

1. Frontend: AWS S3 static website
2. Backend: AWS EC2 Ubuntu server
3. Database: MongoDB Atlas or MongoDB on EC2
4. AI: Groq API key in backend `.env`
5. Map: Google Maps key in frontend `.env`
6. Login: Google Client ID in both frontend and backend `.env`

### AWS Deployment Overview

You will do the AWS deployment in this order:

1. Create or use an online MongoDB database.
2. Create an EC2 server for the backend.
3. Install Node.js and PM2 on EC2.
4. Upload backend code to EC2 using GitHub.
5. Start backend with PM2.
6. Build frontend on your computer.
7. Upload frontend `dist` files to S3.
8. Enable S3 static website hosting.
9. Update Google settings.
10. Test the live website.

### Step 1: Prepare Backend For EC2

Before you start the backend on EC2, prepare the backend environment values.

You need:

1. MongoDB Atlas connection string or MongoDB connection string from your EC2 MongoDB server
2. JWT secret
3. Groq API key
4. Google Client ID
5. Frontend S3 website URL

On EC2, backend `.env` should look like this:

```env
PORT=5000
MONGO_URI=your_online_mongodb_connection_string
JWT_SECRET=your_strong_secret
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.1-8b-instant
GOOGLE_CLIENT_ID=your_google_login_client_id
CORS_ORIGIN=http://your-s3-website-url
```

If you use a domain and HTTPS later, `CORS_ORIGIN` should be your frontend domain.

Example:

```env
CORS_ORIGIN=https://yourdomain.com
```

### Step 2: Prepare Frontend For S3

Before building frontend, set `frontend/.env` on your local computer.

Use your EC2 backend URL in frontend `.env`.

```env
VITE_GOOGLE_CLIENT_ID=your_google_login_client_id
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_API_BASE_URL=http://your-ec2-public-ip:5000/api
VITE_SOCKET_URL=http://your-ec2-public-ip:5000
```

If you use a domain and HTTPS later:

```env
VITE_API_BASE_URL=https://api.yourdomain.com/api
VITE_SOCKET_URL=https://api.yourdomain.com
```

Important:

1. Build the frontend only after setting the correct backend URL.
2. If you change `.env`, run `npm run build` again.
3. S3 will use the already built files from the `dist` folder.

### Step 3: Create AWS EC2 Server

Now create the backend server.

1. Open this website:

```text
https://console.aws.amazon.com
```

2. Login to AWS.
3. In the search box at the top, search:

```text
EC2
```

4. Open EC2.
5. Click Instances.
6. Click Launch instances.
7. Enter a server name.

Example:

```text
crime-backend-server
```

8. In Application and OS Images, select Ubuntu.
9. In Instance type, choose a free tier option.

Example:

```text
t2.micro
```

or:

```text
t3.micro
```

10. In Key pair, create or choose a key pair.
11. Download the `.pem` key file if AWS creates a new one.
12. Keep this key file safe. You need it to connect to EC2.
13. In Network settings, allow SSH.
14. Add security group rules for these ports:

```text
22   SSH
80   HTTP
443  HTTPS
5000 Backend API for simple testing
```

For SSH source, you can choose My IP for better safety.

For HTTP, HTTPS, and port `5000`, use:

```text
0.0.0.0/0
```

15. Click Launch instance.
16. Wait until Instance state becomes Running.
17. Select the instance.
18. Copy the Public IPv4 address.

For a beginner demo, port `5000` is enough to test backend.

For a better production setup, use Nginx on port `80` or `443`.

### Step 4: Install Node.js On EC2

Now connect to the EC2 server.

Easy browser method:

1. Open AWS EC2.
2. Click Instances.
3. Select your instance.
4. Click Connect.
5. Choose EC2 Instance Connect.
6. Click Connect.

If EC2 Instance Connect does not work, use SSH from your terminal with the `.pem` file.

After connecting to EC2, run these commands:

Then run:

```bash
sudo apt update
sudo apt install -y nodejs npm git
node -v
npm -v
```

If Node.js version is too old, install Node.js from NodeSource.

Example:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

Install PM2:

```bash
sudo npm install -g pm2
```

PM2 keeps backend running after you close the terminal.

### Step 5: Upload Backend Code To EC2

Use GitHub to get your code on EC2.

In EC2 terminal, run:

```bash
git clone your_github_repo_url
cd your_repo_folder/backend
npm install
```

Example:

```bash
git clone https://github.com/your-username/Ai-crime-investigation-system.git
cd Ai-crime-investigation-system/backend
npm install
```

Create backend `.env`:

```bash
nano .env
```

Paste production backend values.

Example:

```env
PORT=5000
MONGO_URI=your_online_mongodb_connection_string
JWT_SECRET=your_strong_secret
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.1-8b-instant
GOOGLE_CLIENT_ID=your_google_login_client_id
CORS_ORIGIN=http://your-s3-website-url
```

Save the file:

1. Press `Ctrl + O`
2. Press Enter
3. Press `Ctrl + X`

Start backend:

```bash
pm2 start server.js --name crime-backend
pm2 save
```

Check PM2:

```bash
pm2 status
pm2 logs crime-backend
```

Check backend:

```text
http://your-ec2-public-ip:5000
```

You should see:

```text
AI Based Crime Investigation System API is running
```

If the backend does not open:

1. Check EC2 security group.
2. Make sure port `5000` is allowed.
3. Check `pm2 logs crime-backend`.
4. Check backend `.env`.

### Step 6: Build Frontend

On your local computer, go to the frontend folder:

```bash
cd frontend
npm install
npm run build
```

This creates a `dist` folder.

The `dist` folder is the final frontend website.

Do not upload the full frontend source folder to S3.

Upload only the files inside:

```text
frontend/dist
```

### Step 7: Host Frontend On AWS S3

Now upload the built frontend to S3.

1. Open this website:

```text
https://console.aws.amazon.com
```

2. In the top search box, search:

```text
S3
```

3. Open S3.
4. Click Create bucket.
5. Enter a unique bucket name.

Example:

```text
crime-investigation-frontend-demo
```

6. Choose the same AWS region if possible.
7. Under Object Ownership, keep ACLs disabled.
8. Under Block Public Access, uncheck Block all public access only if this is a public demo website.
9. AWS will show a warning. Confirm that you understand the bucket will be public.
10. Click Create bucket.
11. Open the new bucket.
12. Click Upload.
13. Click Add files.
14. Select all files inside `frontend/dist`.
15. Click Add folder if there is an `assets` folder inside `dist`.
16. Upload everything from `frontend/dist`.
17. After upload, open the bucket Properties tab.
18. Scroll to Static website hosting.
19. Click Edit.
20. Select Enable.
21. Set Hosting type:

```text
Host a static website
```

22. Set index document:

```text
index.html
```

23. Set error document:

```text
index.html
```

24. Click Save changes.
25. Copy the Bucket website endpoint.

It will look like this:

```text
http://your-bucket-name.s3-website-region.amazonaws.com
```

Using `index.html` as error document helps React routes like `/register` work after refresh.

### Step 8: Add S3 Bucket Policy

Use this only for public demo hosting.

1. Open your S3 bucket.
2. Click Permissions.
3. Scroll to Bucket policy.
4. Click Edit.
5. Paste the policy below.

Replace `your-bucket-name` with your bucket name.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

6. Click Save changes.
7. Open the S3 website endpoint in your browser.

### Step 9: Update Google Settings After Deployment

After AWS deployment, update Google settings.

1. Open this website:

```text
https://console.cloud.google.com
```

2. Select your Google Cloud project.
3. Go to APIs and Services.
4. Open Credentials.
5. Click your OAuth Client ID.
6. Add your S3 website endpoint in Authorized JavaScript origins.

Add frontend website URL:

```text
http://your-s3-website-url
```

7. Save.
8. Go back to Credentials.
9. Open your Google Maps API key.
10. Add your S3 website endpoint in website restrictions.

Add:

```text
http://your-s3-website-url/*
```

If you use your own domain, add your domain instead.

### Step 10: Update Backend CORS For S3

After S3 website is ready, update backend `.env` on EC2.

1. Connect to EC2.
2. Go to backend folder:

```bash
cd Ai-crime-investigation-system/backend
```

3. Open `.env`:

```bash
nano .env
```

4. Set `CORS_ORIGIN` to your S3 website endpoint.

Example:

```env
CORS_ORIGIN=http://your-bucket-name.s3-website-region.amazonaws.com
```

5. Save the file.
6. Restart backend:

```bash
pm2 restart crime-backend
```

### Step 11: Test Live Project

After deployment, test these:

1. Open frontend URL.
2. Login.
3. Create complaint.
4. Create FIR.
5. Create case.
6. Open Crime Map.
7. Upload evidence.
8. Generate AI report.
9. Open Activity Logs.
10. Test Chat.

### Can This Be Deployed Directly From This Computer?

Yes, but only after AWS setup is available.

To deploy directly from this computer, you need:

1. AWS CLI installed
2. AWS access key and secret key configured
3. EC2 key pair file
4. S3 bucket name
5. EC2 public IP
6. Production MongoDB URL

Without these, the code can be prepared, but the actual live deployment cannot be completed from this machine.

## Demo Data

The project has seed scripts for demo records.

### Basic Demo Data

Run:

```bash
cd backend
npm run seed:demo
```

This creates basic demo data.

### Advanced Demo Data

Run:

```bash
cd backend
npm run seed:advanced
```

This creates demo data for:

1. Crime map
2. Activity logs
3. Notifications
4. Chat
5. Cases
6. FIR
7. Evidence
8. Suspects
9. Reports
10. Meetings

## How To Check Advanced Features

### Check Real-Time Chat

1. Open the project in two browsers.
2. Login as two different users.
3. Open Chat.
4. Send a message.
5. The other user should receive the message without manual refresh.

### Check Crime Map

1. Go to Cases.
2. Create a case.
3. Add latitude and longitude.
4. Go to Crime Map.
5. The case should appear on the map.

Example coordinates:

```text
Latitude: 22.5605
Longitude: 88.3525
```

### Check Activity Logs

1. Create or update a case.
2. Upload evidence.
3. Create a report.
4. Send a chat message.
5. Go to Activity Logs.
6. You should see the action history.

### Check AI Analysis

1. Login as police or admin.
2. Go to AI Analysis.
3. Paste crime notes.
4. Click Analyze.
5. AI will return investigation help.

### Check AI Report

1. Login as police or admin.
2. Go to Reports.
3. Paste raw crime notes in ATS Friendly AI Report section.
4. Click Generate AI Report.
5. Review the generated report.
6. Save it.

### Check Two-Factor Authentication

1. Open the login page.
2. Enter email and password.
3. The OTP page will open.
4. Scan the QR code using Google Authenticator, Microsoft Authenticator, or Authy.
5. If QR scanning does not work, copy the secret key into the authenticator app.
6. Enter the 6 digit OTP code.
7. Click Verify OTP.
8. After correct OTP, the dashboard will open.

## Important Environment Notes

Do not upload `.env` files to GitHub.

The project uses `.gitignore` to ignore:

1. backend `.env`
2. frontend `.env`
3. node_modules

Keep your API keys private.

## Useful Scripts

### Backend

```bash
npm run dev
```

Starts backend with nodemon.

```bash
npm run start
```

Starts backend normally.

```bash
npm run seed:demo
```

Creates basic demo data.

```bash
npm run seed:advanced
```

Creates advanced demo data.

### Frontend

```bash
npm run dev
```

Starts frontend development server.

```bash
npm run build
```

Builds frontend for production.

```bash
npm run serve
```

Runs Vite preview server.

## Project Purpose

This project is useful for:

1. College final year project
2. MERN stack learning
3. AI integration learning
4. Role based system learning
5. Crime investigation workflow demo
6. MongoDB database project
7. Full stack web development practice

## Future Improvements

In future, this project can be improved with:

1. Better production deployment
2. Full AWS S3 file upload
3. More advanced AI investigation assistant
4. Better map filters
5. Case timeline view
6. More detailed audit logs
7. Export reports as PDF
8. Mobile app version

## Final Note

This is an educational AI crime investigation project. It shows how MERN stack, Groq AI, Google Maps, Socket.io, JWT, OTP, and MongoDB can work together in one full stack application.

The code is written in a simple style so students can understand it, explain it in viva, and modify it later.
