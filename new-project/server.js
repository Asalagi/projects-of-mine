
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const pool = require('./config/connect-horse');

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.send("hi, we're a gonna make a project")
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});