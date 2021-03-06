var express = require('express'),
  router = express.Router(), //#A
  resources = require('./../resources/model');

  router.route('/').get(function (req, res, next) { // #A
   res.send(resources.pi.actuators); // #B
  });

  router.route('/leds').get(function (req, res, next) { // #C
    res.send(resources.pi.actuators.leds);
  });

  router.route('/leds/:id').get(function (req, res, next) { //#D
    res.send(resources.pi.actuators.leds[req.params.id]); //#E
  }).put(function(req,res,next){

  var myLed = resources.pi.actuators.leds[req.params.id];
   myLed.value = req.body.value;
   console.info('put request done');
      res.send(myLed.value);
  });

  module.exports = router;
