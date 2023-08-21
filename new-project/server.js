const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use (bodyParser.json())
app.use(
    bodyPaser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.send("hi")
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});