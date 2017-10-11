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
        task: 'Slay the Dragons',
        priority: 'low',
        status: 'queue',
        createdBy: 'Reyn',
        assignedTo: 'Oksana'
      },
      {
        id: 2,
        task: 'Tell Jon Snow he is not a bastard',
        priority: 'high',
        status: 'queue',
        createdBy: 'Jon',
        assignedTo: 'Ian'
      }
    ]
  );
});

app.listen(PORT, () => {
  console.log('now listening on port ' + PORT);
})