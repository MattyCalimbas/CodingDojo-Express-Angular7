var mongoose = require ('mongoose');
var Gold = mongoose.model('Gold');

module.exports = {
    create: function (req, res) {
        gold = new Gold ({
            gold: 0
        })
        gold.save(function(err){
            if (err){
                res.json({message: 'Error', error:err});
            } else {
                res.json({gold});
            }
        })
    },

    getGold:  function (req, res) {
        Gold.find({}, function (err, golds) {
            if (err) {
                res.json({message:'Error', error:err});
            } else {
                 res.json(golds);
            }
        })
    },

    update: function (req, res) {
        Gold.findByIdAndUpdate({_id: req.params.id },{$set:{ gold: req.body.gold}}, function(err, gold) {
            if (err){
                res.json({message: 'Error', error:err})
            } else {
                res.json(gold);
            }
        })
    },
    getById: function (req, res) {
        Gold.findById({_id: req.params.id}, function(err, gold){
            res.json(gold);
        })
    },

    destroy: function(req,res) {
        Gold.remove(gold, function(err){
            res.json({message:'Deleted'});
        })
    }
}