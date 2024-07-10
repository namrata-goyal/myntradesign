const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config(); // Ensure this line is at the top



const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', authRoutes);

const PORT =  5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
