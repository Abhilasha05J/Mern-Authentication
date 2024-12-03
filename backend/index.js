const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const DashboardRouter =require('./Routes/DashboardRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

//this is to test your server on localhost8080/ping , if you get pong response means your server is running fine  
app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/dashboard', DashboardRouter);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})