var cakes = require('./../controllers/cakes.js');

module.exports = function (app) {
    app.get('/api/cakes', cakes.index);
    app.post('/api/cakes', cakes.create);
    app.post('/api/cakes/:id', cakes.createComment);
}