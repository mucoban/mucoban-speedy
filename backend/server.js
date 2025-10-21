const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

require('./routes')(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})