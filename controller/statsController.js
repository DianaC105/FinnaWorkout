//Importing models
const db = require("../models");
const Stats = require("../models/stats");


module.exports = {
    findAll: function(req, res) {
        db.Stats.find({
            userId: req.user._id
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            res.status(422).json(err);
        })
    },

    create: function(req, res) {
        req.body.userId = req.user._id
        db.Stats.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            res.status(422).json(err);
        })
    }
  
};
