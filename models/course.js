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
