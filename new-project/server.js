const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

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