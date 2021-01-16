const express = require('express');
const port = 8000;
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Now do it!!</h1>');
})

app.listen(port, (err) => {
    if(err) {
        console.log('Some error occurred!');
    } else {
        console.log(`Successfully connected to port: ${port}`)
    }
});