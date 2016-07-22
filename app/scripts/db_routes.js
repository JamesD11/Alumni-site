var express= require('express');
var passport= require('passport');

var _ = require('lodash');
var logger = require('morgan');
var nodemailer= require ('nodemailer');

// var _ = require('lodash');
// var logger = require('morgan');
// var nodemailer= require ('nodemailer');

var bodyParser= require('body-parser');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var connection = require('../config/sequelize.js');
// var winston = require('../config/winston');


//  app.use(logger('combined'));
  //sample post for new sign in

        // var ufirst_name     = 'James';


var linkedin= {
  code: function(profile, callback){
    console.log(profile);
    connection.profile.create({
        first_name: profile.firstName,
        last_name: profile.lastName,
        // email: uemail,
        // current_job: ucurrent_job ,
        // portfolio_link: uportfolio_link,
        // skills: uskills,
        // front_end: ufront_end,
        // back_end:uback_end,
        // full_stack:ufull_stack
      });
  }
};
module.exports= linkedin;

//
//
//
// //all post for creating new user/partner/event
//   //app.use(logger('combined'));
//   //sample post for new sign in
//
//         //var ufirst_name     = req.body.
// >>>>>>> 559413523b0781117c1673edd87c553c98d39503
//         // var ulast_name      = 'D';
//         // var uemail          = 'email@gmail.com';
//         // var ucurrent_job    = 'being awesome';
//         // var uportfolio_link = 'linkhere';
//         // var uskills         = 'too many to list';
//         // var ufront_end       = true;
//         // var uback_end        = false;
//         // var ufull_stack      = false;
// <<<<<<< HEAD
//         //
// =======
//
// >>>>>>> 559413523b0781117c1673edd87c553c98d39503
//         connection.profiles.create({
//             first_name: ufirst_name,
//             last_name: ulast_name,
//             email: uemail,
//             current_job: ucurrent_job ,
//             portfolio_link: uportfolio_link,
//             skills: uskills,
//             front_end: ufront_end,
//             back_end:uback_end,
//             full_stack:ufull_stack
//           });
//             //  }).then(function() {
//             //      // should nodemailer go here?
//             //   }).then(function() {
//             //       res.redirect('/index');// ?where should we send users after new user
//             //    });
//
//
// <<<<<<< HEAD
// });
//
// app.post('/newpartnerroutehere', function(req,res) {
//
//       var hpcompany_name          = req.body.hpcompany_name;
//       var hpcontact_person        = req.body.hpcontact_person;
//       var hpemail                 = req.body.hpemail;
//       var hplinked_in_profile     = req.body.hplinked_in_profile;
//       var hplink_to_open_position = req.body.hplink_to_open_position;
//
//       //need to figure out front/back/full
//
//       connection.partners.create({
//           company_name: hpcompany_name,
//           contact_person:hpcontact_person,
//           email: hpemail,
//           linked_in_profile: hplinked_in_profile,
//           link_to_open_position:hplink_to_open_position,
//      }).then(function() {
//       //nodemailer??
//       }).then(function() {
//           res.redirect('/profiles');
//        });
//
//
// });
//
// app.post('/neweventroutehere', function(req,res) {
//
//       var hpcompany_name          = req.body.hpcompany_name;
//       var hpcontact_person        = req.body.hpcontact_person;
//       var hpemail                 = req.body.hpemail;
//       var hplinked_in_profile     = req.body.hplinked_in_profile;
//       var hplink_to_open_position = req.body.hplink_to_open_position;
//
//       //need to figure out front/back/full
//
//       connection.partners.create({
//           company_name: hpcompany_name,
//           contact_person:hpcontact_person,
//           email: hpemail,
//           linked_in_profile: hplinked_in_profile,
//           link_to_open_position:hplink_to_open_position,
//      }).then(function() {
//           res.redirect('/news');
//        });
//
//
// });
//
//
// //get routes
// app.get('/profile',function(req,res){
//     connection.profiles.findAll({
//       where:{
//           name: req.params.name
//       }
//     });
// });
// //get all user profiles by search
//
// app.get('/partner',function(req,res){
//     connection.partners.findAll({
//       where:{
//           name: req.params.name
//       }
//     });
// });
// };
// =======
// // });
// //
// // app.post('/newpartnerroutehere', function(req,res) {
// //
// //       var hpcompany_name          = req.body.hpcompany_name;
// //       var hpcontact_person        = req.body.hpcontact_person;
// //       var hpemail                 = req.body.hpemail;
// //       var hplinked_in_profile     = req.body.hplinked_in_profile;
// //       var hplink_to_open_position = req.body.hplink_to_open_position;
// //
// //       //need to figure out front/back/full
// //
// //       connection.partners.create({
// //           company_name: hpcompany_name,
// //           contact_person:hpcontact_person,
// //           email: hpemail,
// //           linked_in_profile: hplinked_in_profile,
// //           link_to_open_position:hplink_to_open_position,
// //      }).then(function() {
// //       //nodemailer??
// //       }).then(function() {
// //           res.redirect('/profiles');
// //        });
// //
// //
// // });
// //
// // app.post('/neweventroutehere', function(req,res) {
// //
// //       var hpcompany_name          = req.body.hpcompany_name;
// //       var hpcontact_person        = req.body.hpcontact_person;
// //       var hpemail                 = req.body.hpemail;
// //       var hplinked_in_profile     = req.body.hplinked_in_profile;
// //       var hplink_to_open_position = req.body.hplink_to_open_position;
// //
// //       //need to figure out front/back/full
// //
// //       connection.partners.create({
// //           company_name: hpcompany_name,
// //           contact_person:hpcontact_person,
// //           email: hpemail,
// //           linked_in_profile: hplinked_in_profile,
// //           link_to_open_position:hplink_to_open_position,
// //      }).then(function() {
// //           res.redirect('/news');
// //        });
// //
// //
// // });
// //
// //
// // //get routes
// // app.get('/profile',function(req,res){
// //     connection.profiles.findAll({
// //       where:{
// //           name: req.params.name
// //       }
// //     });
// // });
// // //get all user profiles by search
// //
// // app.get('/partner',function(req,res){
// //     connection.partners.findAll({
// //       where:{
// //           name: req.params.name
// //       }
// //     });
// // });
// // };
// >>>>>>> 559413523b0781117c1673edd87c553c98d39503
