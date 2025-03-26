# Exerp Test

## Installation

You can run the application in two ways:

### 1️⃣ Using Docker (Recommended)
Ensure you have Docker installed and running, then execute:

    docker compose up --build

This will build and start both the backend and frontend services.

### 2️⃣ Running Manually

### backend

    cd backend
    yarn
    yarn serve

### frontend

    cd frontend
    yarn
    yarn serve

### E2E testing

    cd frontend
    yarn cy:open

# Assignment Completion Summary

## Changes & Implementations

- ✅ **Project Copied to Personal GitHub**  
  - The project has been cloned into my own repository instead of forking.  

- ✅ **Location Selection**  
  - Users can select a location **either by searching for a city** or **clicking on the map**.  

- ✅ **Error Handling & Loading State**  
  - Implemented proper error handling with **user-friendly messages**.  
  - Added **loading indicators** to enhance user experience.  

- ✅ **TailwindCSS for Styling**  
  - Used **TailwindCSS** for consistent styling across the app.  
  - Custom CSS improvements made where necessary.  

- ✅ **UI/UX Enhancements**  
  - Improved layout for better readability and usability.  
  - Optimized for smooth interaction.  

- ✅ **Responsive Design**  
  - Ensured the app works well across **various screen sizes**.

### 🚀 Extra Features Added  

- ✅ **Current Location Support**  
  - Integrated fetching the **user’s current location** and displaying weather information accordingly.  

- ✅ **Dynamic Search Fields**  
  - The search field dynamically updates when the user **changes the location on the map** or selects **current location**.  