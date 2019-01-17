var beers = require("./../controllers/beer_ids.js")
var path = require('path');

module.exports = function(app){
    app.post('/session', function (req, res){
        req.session.beer_ids = req.body
        res.json(req.session.beer_ids);
    });
    app.get('/session', function (req, res){
        req.body = req.session.beer_ids;
        res.json(req.body);
    })
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    });
}
