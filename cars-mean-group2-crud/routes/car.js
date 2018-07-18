var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Car = require('../models/Car.js');

/* GET ALL CarS */
router.get('/', function(req, res, next) {
  Car.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Car BY ID */
router.get('/:id', function(req, res, next) {
  Car.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Car */
router.post('/', function(req, res, next) {
  Car.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Car */
router.put('/:id', function(req, res, next) {
  Car.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Car */
router.delete('/:id', function(req, res, next) {
  Car.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
