# Deals CRM Module

This is a full-stack web application for managing sales deals, enabling users to view, search, and filter deals efficiently. It features a React and Vite-based responsive frontend with Material-UI components, and a Node.js/Express backend exposing RESTful APIs with Prisma ORM managing a MySQL database.

## Features

- Responsive UI with instant search and advanced filtering options.
- Animated UI transitions for a smooth user experience.
- Backend API supports flexible querying and pagination of deals.
- Secure cross-origin requests enabled by CORS configuration.
- Clean, modular, and maintainable codebase.

---

## Screenshot Gallery

### Frontend Main View
![Frontend Main View](ScreenShot/frontend.png)

### Filter Panel Screenshots
![Filter ](ScreenShot/filter.png)

#### 1. Filter by Deal Stage - New
![Filter Stage New](ScreenShot/New%20Filter.png)

#### 2. Filter by Deal Stage - In Progress
![Filter Stage In Progress](ScreenShot/In%20Progress%20Filter.png)

#### 3. Filter by Deal Stage - Won
![Filter Stage Won](ScreenShot/Won%20Filter.png)

#### 4. Filter by Deal Stage - Lost
![Filter Stage Lost](ScreenShot/Lost%20Filter.png)

### Value Range Filter (Min and Max)
![Value Range Filter](ScreenShot/Min%20and%20Max%20Filter.png)

### Search Results by Name
#### 1. Search by "Deal Name"
![Search by Deal Name](ScreenShot/Deals%20Name%20Filter.png)

#### 2. Search by "Contact Name"
![Search by Contact Name](ScreenShot/Contact%20Name%20Filter.png)

#### 3. Search by "Company Name"
![Search by Company Name](ScreenShot/Company%20Name%20Filter.png)

---

## Technologies Used

### Frontend
- *React:* A JavaScript library for building user interfaces.
- *Vite:* A fast build tool for modern web development.
- *Material-UI (MUI):* A popular React UI framework.
- *framer-motion:* A production-ready motion library for React.

### Backend
- *Node.js & Express.js:* The backend runtime and web framework.
- *Prisma ORM:* A modern database toolkit for type-safe database access.
- *MySQL:* The relational database for persistent storage, hosted on the Railway service.

---

## How to Set Up and Run

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL database server hosted on Railway or local equivalent

### 1. Backend Setup

1.  Navigate to the backend directory: `cd backend`.
2.  Install dependencies: `npm install`.
3.  Create a `.env` file based on `.env.example` and update your MySQL connection string to point to your Railway database instance.
    ```
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
    PORT=4000
    ```
4.  Run Prisma migrations to create the database schema:
    ```
    npx prisma migrate dev --name init
    ```
5.  Seed the database with sample data:
    ```
    npm run seed
    ```
6.  Start the backend server in development mode:
    ```
    npm run dev
    ```

### 2. Frontend Setup

1.  Navigate to the frontend directory: `cd ../frontend`.
2.  Install dependencies: `npm install`.
3.  Create a `.env` file and specify the backend URL:
    ```
    VITE_API_URL=http://localhost:4000/api
    ```
4.  Start the frontend development server:
    ```
    npm run dev
    ```
The application should now be available at [http://localhost:5173](http://localhost:5173) (or another port specified by Vite).

---

## Backend API: Deal Management Endpoint

### GET `/api/deals`

- Supports filtering by search term, stage, value range, with pagination.

#### Query Parameters

- `q` (string, optional): Text search across deal name, contact name, and company.
- `stage` (string, optional): Deal stage filter (`New`, `In_Progress`, `Won`, `Lost`).
- `min` (decimal, optional): Minimum deal value (inclusive).
- `max` (decimal, optional): Maximum deal value (inclusive).
- `page` (integer, optional, default: 1): Page number for pagination.
- `limit` (integer, optional, default: 10): Number of deals per page.

#### Example Request

- GET /api/deals?q=Acme&stage=In_Progress&min=5000&max=100000&page=1&limit=5


#### Example Response

{
"deals": [
{
"id": 1,
"name": "Deal 1",
"contactName": "John Doe",
"company": "Acme Corp",
"stage": "In_Progress",
"value": 7500.00,
"createdAt": "2025-06-01T12:34:56.789Z",
"closeDate": "2025-08-31T00:00:00.000Z"
}
],
"total": 23,
"page": 1,
"limit": 5,
"totalPages": 5
}


#### Error Handling

Returns status 500 with error message on server failure.

---

## Database Schema Overview

The main entity is the `Deal` model defined in Prisma schema:

- `id`: Auto-incremented primary key.
- `name`: Deal name.
- `contactName`: Contact person.
- `company`: Company involved.
- `stage`: Enum (`New`, `In_Progress`, `Won`, `Lost`).
- `value`: Deal value.
- `createdAt`: Creation timestamp.
- `closeDate`: Nullable close date.

---

## Seeding Example Data

Seed the database with sample deals for testing:


---

## Design Decisions & Tradeoffs

- *Prisma ORM:* Chosen for its type-safe nature and easy schema management, significantly reducing boilerplate compared to raw SQL. Its powerful query engine enables building dynamic filters efficiently.
- *Vite:* Selected over Create React App for its faster development server and optimized build times, enhancing the developer experience.
- *Single API Endpoint:* A single, powerful GET `/api/deals` endpoint handles all filtering and searching logic, keeping the API simple and flexible. While complex filters can lead to long URLs, this approach balances simplicity and functionality for this project.
- *framer-motion:* Utilized specifically for the filter panel to deliver smooth, engaging UI animations without complex CSS.
- *CORS Configuration:* Backend restricts API access to the frontend domain to enhance security.
- *Environment Variables:* Used to separate development and production settings cleanly, facilitating easy configuration management.


---

## Folder Structure

/client
├── dist
├── node_modules
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── DealsList.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── SearchBar.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

/server
├── node_modules
├── prisma
├── src
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

/ScreenShot
├── Company Name Filter.png
├── Contact Name Filter.png
├── Deals Name Filter.png
├── filter.png
├── frontend.png
├── In Progress Filter.png
├── Lost Filter.png
├── Min and Max Filter.png
├── New Filter.png
└── Won Filter.png
