require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());


const articles = [
    {
      id: 1,
      title: "The ChatGPT Hype Is Over—Now Watch How Google Will Kill ChatGPT.",
      author: {
        name: "AL Anany",
        verified: true,
        image: "/placeholder.svg"
      },
      description: "It never happens instantly. The business game is longer than you know.",
      date: "Sep 1, 2023",
      views: "23K",
      comments: 788,
      category: "Technology"
    },
    // More articles...
  ]




// Routes
app.use('/api/posts', postRoutes);
app.get('/api/articles', (req, res) => {
    res.json({ articles })
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));