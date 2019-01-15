var mongoose = require ('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    index: function (req, res) {
        Pet.find({}, function (err, pets){
            res.json(pets);
        })
    },

    create: function (req, res) {
        var pet = new Pet({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3
        })
        pet.save(function(err, data){
            if(err){
                res.json(err)
            } else {
                res.json(data);
            }
        })
    }, 

    find: function(req, res) {
        Pet.findOne({_id: req.params.id}, function(err, pet){
            res.json(pet);
            
        })
    },

    update: function (req, res) {
        Pet.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, pet){
            if(err){
                res.json(err);
            } else {
                res.json(pet);
            }
        })
    },

    delete: function(req, res) {
        Pet.remove({_id: req.params.id}, function(err){
            res.json({message: 'Deleted'});
        })
    }
}