const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/test', (request, response) => {
  let output = {};
  let { x } = request.body;
  let { y } = request.body;
  let sum = x + y;
  output.sum = sum;
  console.log(output)
  response.send(output);
});

const port = 1337;

app.listen(port, () => console.log(`listening on port ${port}`));