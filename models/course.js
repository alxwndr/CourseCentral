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
