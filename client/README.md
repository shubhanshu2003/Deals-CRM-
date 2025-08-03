# Deals CRM Module

This is a full-stack application for a Deals CRM module. It allows users to view, search, and filter a list of sales deals.

## Features

- *Frontend:* A responsive UI built with React, Vite, and Material-UI.
- *Search:* Instant search by Deal Name, Contact Name, and Company.
- *Filtering:* Advanced filters for Deal Stage and Value Range (min/max).
- *Smooth UI:* Uses framer-motion for animated transitions, such as the filter panel.
- *Backend:* A REST API built with Express.js and a MySQL database managed by Prisma ORM.
- *Pagination:* Handles large datasets by paginating results on the backend.
- *Code Quality:* Organized, clean, and well-documented code.

## Technologies Used

### Frontend
- *React:* A JavaScript library for building user interfaces.
- *Vite:* A fast build tool for modern web development.
- *Material-UI (MUI):* A popular React UI framework.
- *framer-motion:* A production-ready motion library for React.

### Backend
- *Node.js & Express.js:* The backend runtime and web framework.
- *Prisma ORM:* A modern database toolkit for type-safe database access.
- *MySQL:* The relational database for persistent storage.

## How to Set Up and Run

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL database server

### 1. Backend Setup

1.  Navigate to the backend directory: cd backend.
2.  Install dependencies: npm install.
3.  Create a .env file based on .env.example and update your MySQL connection string.
    env
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
    PORT=4000
    
4.  Run Prisma migrations to create the database schema: npx prisma migrate dev --name init.
5.  Seed the database with sample data: npm run seed.
6.  Start the backend server in development mode: npm run dev.

### 2. Frontend Setup

1.  Navigate to the frontend directory: cd ../frontend.
2.  Install dependencies: npm install.
3.  Create a .env file and specify the backend URL:
    env
    VITE_API_URL=http://localhost:4000/api
    
4.  Start the frontend development server: npm run dev.

The application should now be available at http://localhost:5173 (or another port specified by Vite).

## Design Decisions & Tradeoffs

- *Prisma ORM:* Chosen for its type-safe nature and easy schema management, which significantly reduces boilerplate code compared to raw SQL queries. Its powerful query engine allows for building dynamic filters efficiently.
- *Vite:* Selected over Create React App for its faster development server and build times, which improves the developer experience.
- *Single API Endpoint:* A single, powerful GET /api/deals endpoint was designed to handle all filtering and searching logic. This keeps the API simple and flexible. A tradeoff is that a very complex filter could become a long URL, but for this task, it is the most efficient approach.
- **framer-motion:** Used specifically for the filter panel to provide a smooth, engaging user experience without complex CSS transitions.
-