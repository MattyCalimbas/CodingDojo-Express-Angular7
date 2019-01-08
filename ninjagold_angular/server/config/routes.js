const mongoose = require('mongoose');
const golds = require('./../controllers/golds.js');

module.exports = function(app){
    app.post('/golds', golds.create);
    app.get('/golds/:id', golds.getById)
    app.get('/golds', golds.getGold);
    app.put('/golds/:id', golds.update);
    app.delete('/golds/:id', golds.destroy);
}