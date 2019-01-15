var mongoose = require('mongoose');

var petSchema = mongoose.Schema({
    name: {type: String, required: [true, 'Must submit valid pet name'], minlength: [3, 'Name does not meet mimimum character requirements']},
    type: {type: String, required: [true, 'Must submit valid pet type'], minlength: [3, 'Pet Type does not meet mimimum character requirements']},
    description: {type: String, required: [true, 'Must submit valid pet description'], minlength: [3, 'Description does not meet mimimum character requirements']},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}
}, {timestamps:true});
mongoose.model('Pet', petSchema)