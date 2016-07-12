var express    = require('express');
var request    = require('request');
var nodemailer = require('nodemailer');
var bodyParser= require('body-parser');

var connection = require('../config/sequelize.js');

module.exports = function(app) {

// all post for creating new user/partner/event

  //sample post for new sign in
  app.post('/newalumniroutehere',function(req,res) {

        var ufirst_name     = req.body.ufirst_name;
        var ulast_name      = req.body.ulast_name;
        var uemail          = req.body.uemail;
        var ucurrent_job    = req.body.ucurrent_job;
        var uportfolio_link = req.body.uportfolio_link;
        var uskills         = req.body.uskills;


        connection.profile.create({
            first_name: ufirst_name,
            last_name: ulast_name,
            email: uemail,
            current_job: ucurrent_job,
            portfolio_link:uportfolio_link,
            skills:uskills
       }).then(function() {
           // should nodemailer go here?
        }).then(function() {
            res.redirect('/index');// ?where should we send users after new user
         });


});

app.post('/newpartnerroutehere', function(req,res) {

      var hpcompany_name          = req.body.hpcompany_name;
      var hpcontact_person        = req.body.hpcontact_person;
      var hpemail                 = req.body.hpemail;
      var hplinked_in_profile     = req.body.hplinked_in_profile;
      var hplink_to_open_position = req.body.hplink_to_open_position;

      //need to figure out front/back/full

      connection.partner.create({
          company_name: hpcompany_name,
          contact_person:hpcontact_person,
          email: hpemail,
          linked_in_profile: hplinked_in_profile,
          link_to_open_position:hplink_to_open_position,
     }).then(function() {
      //nodemailer??
      }).then(function() {
          res.redirect('/profiles');
       });


});

app.post('/neweventroutehere', function(req,res) {

      var hpcompany_name          = req.body.hpcompany_name;
      var hpcontact_person        = req.body.hpcontact_person;
      var hpemail                 = req.body.hpemail;
      var hplinked_in_profile     = req.body.hplinked_in_profile;
      var hplink_to_open_position = req.body.hplink_to_open_position;

      //need to figure out front/back/full

      connection.partner.create({
          company_name: hpcompany_name,
          contact_person:hpcontact_person,
          email: hpemail,
          linked_in_profile: hplinked_in_profile,
          link_to_open_position:hplink_to_open_position,
     }).then(function() {
          res.redirect('');
       });


});


//get routes

//get all user profiles by search
};
