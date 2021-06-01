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
app.use('/', routes);

app.listen(PORT, console.log(`server started on port :${PORT}`));
