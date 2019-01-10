var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    comment: {type: String},
    rating: {type: Number}
})

var cakeSchema = mongoose.Schema({
    name: {type: String},
    url: {type: String},
    comments: [commentSchema]
})

mongoose.model('Comment', commentSchema);
mongoose.model('Cake', cakeSchema);