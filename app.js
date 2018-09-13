const express = require('express');

const port = 3000;

const app = express();
const server = app.listen(port);

app.use(express.static('public'));

console.log(`Server is running on port: ${port}`);