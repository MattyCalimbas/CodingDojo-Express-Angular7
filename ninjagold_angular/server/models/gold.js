var mongoose = require('mongoose');

var GoldSchema = new mongoose.Schema ({
    gold: {type: Number, default: 0},
}, {timestamps:true});
mongoose.model('Gold', GoldSchema);