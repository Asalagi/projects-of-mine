const express = require('express');
const app = express();
const port = 3001;

const member = require('./models/member'); 

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  member.getMembers() 
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.post('/member', (req, res) => {
  member.createMember(req.body) 
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

  app.put('/member/:id', (req, res) => {
    const { id } = req.params;
    const updatedMember = req.body;
    
    member.updateMember(id, updatedMember)
      .then(result => res.send(result.rows[0]))
      .catch(error => {
        console.error(error);
        res.status(500).send('There was an error updating the member');
      });
  });

app.delete('/member/:id', (req, res) => {
  member.deleteMember(req.params.id) 
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
