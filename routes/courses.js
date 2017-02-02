var express = require('express');
var router = express.Router();

var Course = require('../models/course');

router.get('/', function(req, res, next) {
  Course.getCourses(function(err, courses){
      if(err){
          console.log(err);
      }
      res.json(courses);
  });
});

router.get('/:id', function(req, res, next) {
  Course.getCourseById(req.params.id, function(err, course){
      if(err){
          console.log(err);
      }
      res.json(course);
  });
});

router.get('/category/:category', function(req, res, next) {
  Course.getCoursesByCategory(req.params.category, function(err, courses){
      if(err){
          console.log(err);
      }
      res.json(courses);
  });
});



    // Create Course
    Course.createCourse(newCourse, function(err, course){
        if(err){
            console.log(err);
        }

        res.location('/courses');
        res.redirect('/courses');
    });
});

// Update Course
router.put('/', function(req, res, next){
    // Get Form Values

    var id = req.body.id;
    var data = {
        title: req.body.title,
        category: req.body.category,
        body: req.body.body,
        linkurl : req.body.linkurl,
        previmage : req.body.previmage,
        provider : req.body.provider,
        lang: req.body.lang

    };

    // Create Course
    Course.updateCourse(id, data, function(err, course){
        if(err){
            console.log(err);
        }

        res.location('/courses');
        res.redirect('/courses');
    });
});


// Remove Course
router.delete('/:id', function(req, res, next){

    var id = req.params.id;

    Course.removeCourse(id, function(err, course){
        if(err){
            console.log(err);
        }

        res.location('/courses');
        res.redirect('/courses');
    });
});

module.exports = router;
