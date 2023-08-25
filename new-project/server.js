
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const horse = require('./models/horse-model');

app.use(cors());
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.send("hi, we're a gonna make a project")
});

app.get('/horses', horse.getHorses);
app.get('/horses/:id', horse.getHorseById);
app.post('/horses', horse.createHorse);
app.put('/horses/:id', horse.updateHorse);
app.delete('/horses/:id', horse.deleteHorse);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});