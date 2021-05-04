const { Sequelize } = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const db = new Sequelize('sequelizetest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
db.authenticate()
  .then(() => console.log('database connected ....'))
  .catch((err) => console.log(`unable to connect, Error :${err}`));
app.get('/', (req, res) => res.send('INDEX'));

app.listen(PORT, console.log(`server started on port :${PORT}`));
