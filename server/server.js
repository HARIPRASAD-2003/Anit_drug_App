const express = require('express');
const dbOperation = require('./dbFiles/dbOperations');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const port =  5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/usersearch', async (req, res) => {
  try {
    console.log('Searching for user:', req.body.name);
    const result = await dbOperation.getuser(req.body.name);
    res.send(result);
  } catch (error) {
    console.error('Error in usersearch:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/useradd', async (req, res) => {
  try {
    console.log('Adding user:', req.body);
    await dbOperation.adduser(req.body);
    const result = await dbOperation.getuser(req.body.Username);
    res.send(result);
  } catch (error) {
    console.error('Error in useradd:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(5000, '192.168.1.3', () => {
    console.log('Server is running on http://192.168.1.3:5000');
  });
  