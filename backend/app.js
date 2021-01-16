const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const db = require('./models/mongoose');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());
app.use(cookieParser());


app.use('/', require('./routes'));

app.set('view engine', 'ejs');



app.listen(port, (err) => {
    if(err) {
        console.log('Some error occurred!');
    } else {
        console.log(`Successfully connected to port: ${port}`)
    }
});