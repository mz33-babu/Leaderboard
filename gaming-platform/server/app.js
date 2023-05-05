const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
