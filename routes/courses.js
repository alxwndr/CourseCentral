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
