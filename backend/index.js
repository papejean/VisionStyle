require('dotenv').config(); 
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const app = express(); 
 
app.use(cors()); 
app.use(express.json()); 
 
mongoose.connect(process.env.MONGO_URI) 
  .then(() = connecte')) 
  .catch((err) =
 
// Routes 
app.use('/api/products', require('./routes/products')); 
 
app.listen(4000, () = lance sur port 4000')); 
