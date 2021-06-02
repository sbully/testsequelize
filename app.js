const { Sequelize } = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./app/services/dbconnection/dbconnectionservice');
const routes = require('./app/routes');

const app = express();
const PORT = process.env.PORT || 5000;

db.authenticate()
  .then(() => console.log('database connected ....'))
  .catch((err) => console.log(`unable to connect, Error :${err}`));

app.use(express.json()); //  <<== NE PAS OUBLIER
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use('/', routes);

app.listen(PORT, console.log(`server started on port :${PORT}`));
