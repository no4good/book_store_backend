const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

// app
const app = express();

// db

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connected'));

// routes

app.get('/', (req, res) => {
    res.send('hellss');
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(` Server runing ${port}`);

})

