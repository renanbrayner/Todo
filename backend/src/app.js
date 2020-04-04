const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => console.log('connected to DB!'));

app.use(cors()); //liberar acesso para todos
app.use(express.json());
app.use(routes);

app.listen(3333);