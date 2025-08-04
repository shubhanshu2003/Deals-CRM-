const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dealsRouter = require('./routes/deals');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000; 

// Enable CORS for requests coming from the frontend URL specified in environment variables
// Allows credentials like cookies or authorization headers to be sent
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));


app.use(express.json());

// Mount the deals router on /api path to handle deal-related API routes
app.use('/api', dealsRouter);

// Root endpoint to confirm backend API is running
app.get('/', (req, res) => {
  res.send('Deals CRM Backend API is running!');
});

// Start the server and listen on the configured port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
