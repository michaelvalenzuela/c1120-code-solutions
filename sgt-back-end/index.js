const express = require('express');
const pg = require('pg');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `SELECT *
                FROM "grades"`;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a postive integer'
    });
    return;
  }
  const sql = `SELECT *
              FROM "grades"
              WHERE "gradeId" = $1`;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const grade = req.body;
  const score = parseInt(grade.score, 10);
  const sql = `INSERT INTO "grades"("name", "course", "score")
                VALUES ($1, $2, $3)
                RETURNING *`;
  const params = [grade.name, grade.course, score];

  if (!grade.name || !grade.course || !grade.score) {
    res.status(400).json({
      error: 'Missing name, course, and score'
    });
    return;
  }

  if (grade.score < 1 || grade.score > 100) {
    res.status(400).json({
      error: 'Score must be between 1 and 100'
    });
    return;
  }

  db.query(sql, params)
    .then(result => {
      const retGrade = result.rows[0];
      res.status(201).json(retGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const grade = req.body;
  const score = parseInt(grade.score, 10);
  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a postive integer'
    });
    return;
  }

  if (!grade.name || !grade.course || !grade.score) {
    res.status(400).json({
      error: 'Missing name, course, and score'
    });
    return;
  }

  if (grade.score < 1 || grade.score > 100) {
    res.status(400).json({
      error: 'Score must be between 1 and 100'
    });
    return;
  }

  const sql = `UPDATE "grades"
                SET "name" = $1,
                    "course" = $2,
                    "score" = $3
                WHERE "gradeId" = $4
                RETURNING *`;

  const params = [grade.name, grade.course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const updatedGrade = result.rows[0];
      if (updatedGrade) {
        res.status(200).json(updatedGrade);
      } else {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a postive integer'
    });
    return;
  }

  const sql = `DELETE FROM "grades"
                WHERE "gradeId" = $1
                RETURNING *`;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (deletedGrade) {
        res.sendStatus(204);
      } else {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up on 3000');
});
