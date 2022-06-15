// ===== IMPORTS =====
const express = require('express')
const app = express()
require('dotenv').config()
require('./cofig/database')

// ===== ROUTES =====
// Movies
app.use('/api/v1/movies', require('./routes/api/movies.js'))

// ===== PORT =====
const PORT = 8080
app.listen(PORT, () => console.log(`Express app running on Port ${PORT}`))