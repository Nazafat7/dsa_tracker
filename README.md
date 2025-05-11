# dsa_tracker

# MERN Stack DSA Progress Tracker

A full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack to help users track their progress in learning Data Structures and Algorithms (DSA). Users can register, log in, view a list of DSA topics, mark them as completed, and monitor their overall learning journey.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints (Overview)](#api-endpoints-overview)
- [Future Enhancements (TODO)](#future-enhancements-todo)

## Features

-   **User Authentication:**
    -   User registration with encrypted passwords (bcrypt).
    -   User login with JWT (JSON Web Tokens) for secure sessions.
    -   Logout functionality.
-   **Topic Management:**
    -   Display a list of DSA topics (e.g., Arrays, Linked Lists, Trees, Sorting Algorithms).
    -   (Assumes topics are pre-seeded or managed via an admin interface - not detailed in current scope).
-   **Progress Tracking:**
    -   Users can mark individual topics as "Completed" or "In Progress".
    -   Visual feedback on topic completion status.
-   **Dashboard/Statistics:**
    -   View overall progress (e.g., percentage of topics completed).
    -   (Scope for more detailed statistics in the future).
-   **Protected Routes:** Certain pages (like topics, progress) are only accessible to logged-in users.
-   **Responsive UI:** (Using React-Bootstrap for a degree of responsiveness).

## Technologies Used

-   **Frontend:**
    -   React
    -   React Router DOM (for client-side routing)
    -   React-Bootstrap (for UI components)
    -   Axios (for API calls)
    -   (Potentially Context API or Redux for more complex state management, though not explicitly detailed)
-   **Backend:**
    -   Node.js
    -   Express.js (for building the REST API)
    -   MongoDB (NoSQL database)
    -   Mongoose (ODM for MongoDB)
    -   JSON Web Tokens (JWT) (for authentication)
    -   bcrypt.js (for password hashing)
    -   `dotenv` (for environment variable management)
-   **Database:**
    -   MongoDB (can be local or a cloud instance like MongoDB Atlas)

## Project Structure
