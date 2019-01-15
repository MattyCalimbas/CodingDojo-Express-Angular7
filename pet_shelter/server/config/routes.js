var pets = require('./../controllers/pets.js');
var path = require('path')

module.exports = function (app) {
    app.get('/api/pets', pets.index);
    app.post('/api/pets', pets.create);
    app.get('/api/pets/:id',pets.find);
    app.put('/api/pets/:id', pets.update);
    app.delete('/api/pets/:id', pets.delete);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
    
}