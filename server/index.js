const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// const router = express.Router();
// const bodyParser = require('body-parser');
// // const imageRouter = require('./routes/image_routes');
// const methodOverride = require('method-override');

app.get('/api/tasks', (req, res) => {
  res.json(
    [
      {
        id: 1,
        task: 'Tell Jon Snow he\'s not a bastard',
        priority: 'high',
        status: 'queued up',
        createdBy: 'Bran',
        assignedTo: 'Sam'
      },
      {
        id: 2,
        task: 'Pull up muh pants and do the rock-away',
        priority: 'medium',
        status: 'queued up',
        createdBy: 'Me',
        assignedTo: 'Me'
      },
      {
        id: 3,
        task: 'Find the question to 42',
        priority: 'low',
        status: 'queued up',
        createdBy: 'Universe',
        assignedTo: 'You'
      }
    ]
  );
});

app.listen(PORT, () => {
  console.log('now listening on port ' + PORT);
})