var mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,
    author: String,     // rates
    quality: {
        type: Number,
        min: 0,
        max: 5
    }, // a number between 0-5 
    packaging: Number,     
    deliveryTime: Number,     
    text: String,     
    created_at: Date, // time where comment submitted 
});

module.exports = mongoose.model('Comment',CommentSchema);