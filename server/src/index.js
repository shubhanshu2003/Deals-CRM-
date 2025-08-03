// /backend/src/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dealsRouter = require('./routes/deals');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api', dealsRouter);

app.get('/', (req, res) => {
    res.send('Deals CRM Backend API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});