var mongoose = require('mongoose');

var beerSchema = mongoose.Schema({
    beer_ids: []
});
mongoose.model('Beer_ids', beerSchema)