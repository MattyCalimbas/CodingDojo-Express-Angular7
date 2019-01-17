var mongoose = require ('mongoose');
var Beer_ids = mongoose.model('Beer_ids');

module.exports = {
    favorite: function (req, res) {
       req.session.beer_ids = beer_ids;
    }  
}