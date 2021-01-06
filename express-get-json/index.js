const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const retArray = [];
  for (const student in grades) {
    retArray.push(grades[student]);
  }
  res.json(retArray);
});

app.listen(3000, (req, res) => {
// eslint-disable-next-line no-console
  console.log('Server is started on port 3000!');
});
