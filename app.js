// require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute')
const problemRoutes = require('./routes/problemRoutes')

//middleware
app.use(express.static('public'));
app.use(express.json())

// view engine
app.set('view engine', 'ejs');


  
// Server path
const url = 'mongodb://localhost:27017/OJ';
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
})



//routes
// app.get('/',(req,res) => res.render('home'));
// app.get('/',(req,res) => res.render('homeredirect'));
app.use(authRoutes);
app.use(problemRoutes);
app.listen(5000, () => console.log(`Example app listening on port ${5000}!`))