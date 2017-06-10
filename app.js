const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.json({ 'golf_guru': 'http://127.0.0.1:3000/golf_guru' });
});

app.get('/golf_guru', function(req, res) {
    res.send({ 'Oak Hollow': 'http://127.0.0.1:3000/golf_guru/courses/oak-hollow' });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});