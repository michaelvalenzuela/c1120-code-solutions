const express = require('express');
const data = require('./data');
const fs = require('fs');

const { notes } = data;

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const item in notes) {
    notesArray.push(notes[item]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id < 0) {
    res.status(400).json({ Error: 'ID must be a positive number' });
  } else if (notes[id]) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).json({ Error: `ID:${id} does not exist` });
  }
});

app.post('/api/notes', (req, res) => {
  const note = req.body;
  if (!note.content) {
    res.status(400).json({ Error: 'Content is a required field' });
  } else {
    note.id = data.nextId;
    notes[note.id] = note;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ Error: 'An Unexpected error occurred.' });
        throw err;
      } else {
        res.status(201).json(notes[note.id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id < 0) {
    res.status(400).json({ Error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ Error: `ID:${id} does not exist` });
  } else {
    delete notes[id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ Error: 'An Unexpected error occurred.' });
        throw err;
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id < 0 || !req.body.content) {
    res.status(400).json({ Error: 'id must be a positive integer and content is a required field' });
  } else if (!notes[id]) {
    res.status(404).json({ Error: `ID:${id} does not exist` });
  } else {
    notes[id].content = req.body.content;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ Error: 'An Unexpected error occurred.' });
        throw err;
      } else {
        res.status(200).json(notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000');
});
