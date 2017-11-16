const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

var dir = path.join('../client', 'dist');
app.use(express.static(dir));
app.get('*', (req, res) => {
    res.sendfile(path.join(dir, 'index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));