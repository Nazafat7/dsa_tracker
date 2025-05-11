require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const topicRoutes = require('./routes/topicRoutes');

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/topics', topicRoutes);

// Serve static assets in production (optional, if you build React into backend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));