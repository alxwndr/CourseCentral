var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    linkurl: {
        type: String,
        
    },

    category: {
        type: String,
        index: true,
        required: true
    },
    previmage : {
        type: String,
        
    },

    lang: {
        type: String,
        
    },

    provider: {
        type: String,
        
    },

    date: {
        type:Date,
        default: Date.now
    }


 

});

var Course = module.exports = mongoose.model('Course', courseSchema);


// Get All Courses
module.exports.getCourses = function(callback){
    Course.find(callback);
};

//  Get Course By ID
module.exports.getCourseById = function(id, callback){
    Course.findById(id, callback);
};

// Get Category Courses
module.exports.getCoursesByCategory = function(category, callback){
    var query = {category: category};
    Course.find(query, callback);
};

// Add an Course
module.exports.createCourse = function(newCourse, callback){
    newCourse.save(callback);
};

// Update Course
module.exports.updateCourse = function(id, data, callback){
    var title = data.title;
    var body = data.body;
    var category = data.category;
    var linkurl = data.linkurl;
    var previmage = data.previmage;
    var lang = data.lang;
    var provider = data.provider;



    var query = {_id: id};
    Course.findById(id, function(err, course){
        if(!course){
            return next(new Error('Coul not load course'));
        } else {
            // Update
            course.title    = title;
            course.body     = body;
            course.category = category;
            course.linkurl = linkurl;
            course.previmage = previmage;
            course.provider = provider;
            course.lang = lang;


            course.save(callback);
        }
    });
};

// Remove Course
module.exports.removeCourse = function(id, callback){
    Course.find({
        _id: id
    }).remove(callback);
};
