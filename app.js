const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send({ 'golf_guru': 'http://127.0.0.1:3000/golf_guru' });
});

app.get('/golf_guru', function(req, res) {
    res.send({ 'courses': 'http://127.0.0.1:3000/golf_guru/courses' });
});

app.get('/golf_guru/courses', function(req, res) {
    res.send({ 'Oak Hollow': 'http://127.0.0.1:3000/golf_guru/courses/oak-hollow' });
});

app.get('/golf_guru/courses/oak-hollow', function(req, res) {
    var options = { root: __dirname };

    res.sendFile('oak-hollow.json', options);
});

app.get('/golf_guru/games/1', function(req, res) {
    var options = { root: __dirname };

    res.sendFile('game.json', options);

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});