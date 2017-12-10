const express = require('express');
const models = require('./models/index');
const validation = require('express-validation');

// create router for version 1
const apiRoutes = express.Router();

/*
 * GET /users route to retrieve all the users.
 * EXAMPLE
 */
apiRoutes.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob@gmail.com',
    },
    {
      id: 2,
      firstName: 'Tammy',
      lastName: 'Norton',
      email: 'tnorton@yahoo.com',
    },
    {
      id: 3,
      firstName: 'Tina',
      lastName: 'Lee',
      email: 'lee.tina@hotmail.com, ',
    },
  ]);
});

/*
 * POST /user route insert a user
 */
apiRoutes.post('/user', validation(models.User), (req, res) => {
  res.json([
    {
      id: 1,
      ssn: req.body.ssn,
      email: req.body.email,
    },
  ]);
});


/*
 * validation errors
 */
apiRoutes.use((err, req, res, next) => {
  if (err instanceof validation.ValidationError) return res.status(err.status).json(err);

  return next();
});

module.exports = apiRoutes;

