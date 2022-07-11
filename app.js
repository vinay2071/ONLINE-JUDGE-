const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute')
const problemRoutes = require('./routes/problemRoutes')
const submissionsRoutes = require('./routes/submissionsRoutes')
const ejs = require('ejs')
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const {requireAuth,checkUser} = require('./middleware/authMiddleware');


//middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'myfavicon.ico')));


// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

var port = process.env.PORT || "5000";
  
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
// app.get('/hehe',(req,res)=>{
// Problem.find().then(result=>{
//   res.render('questions',{prb:result})
// }).catch(err=>{
//     console.log(err);
// })
// })
app.get('*',checkUser)
app.get('/home',requireAuth,(req,res) => res.render('home'));
app.use(authRoutes);
app.use(problemRoutes);
app.use(submissionsRoutes)
app.listen(port, () => console.log(`Example app listening on port ${5000}!`))