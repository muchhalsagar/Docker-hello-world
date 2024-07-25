const express = require('express');
const app = express();
const port = 3000;

//create a express server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//app listion on 3000
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});