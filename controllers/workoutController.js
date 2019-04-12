const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Workout.find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    findById: function(req, res) {
        db.Workout.find({ _id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));

    },
    create: function(req, res) {
        db.Workout.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    update: function(req, res) {
        db.Workout.findOneAndUpdate({ _id: req.paras.id} ,req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));

    },
    remove: function(req, res) {
        db.Workout.findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    }
};