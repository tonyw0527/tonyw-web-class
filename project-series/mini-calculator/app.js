const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/static', 'index.html'));
})
console.log()

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} now!🚀`);
})