require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const horse = require('./models/horse-model');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("hi, we're gonna make a project");
});

app.get('/horses', async (req, res) => {
  try {
    const response = await horse.getHorses();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/horses', async (req, res) => {
  horse.createHorse(req.body)
  .then(response => {
    res.status(200).json({
      success: true,
      message: 'Registration successful',
      member: response
    });
  })
  .catch(error => {
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: error.message
    });
  });
});

app.get('/horses/:id', async (req, res) => {
  try {
    const horseId = req.params.id;
    const response = await horse.getHorseById(horseId);

    if(response) {
      res.status(200).send(response);
    } else {
      res.status(404).send('Horse is not found');
    }
  } catch (error) {
    res.status(500).send(error)
  }
});

app.put('/horses/:id', horse.updateHorse);
app.delete('/horses/:id', horse.deleteHorse);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
