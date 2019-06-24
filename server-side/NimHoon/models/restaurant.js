var mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema ({ 
    id: String, // or an autoincreament number,     
    name:String,     
    logo:String, // src of logo image      
    openingTime:Number, // time of opening     
    closingTime:Number, // time of closing     
    averageRate:Number, // average of comments rate     
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },   
    categories:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }], // array of food categories. e.g. fastfood or irani     
    foods:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
});

module.exports = mongoose.model('Restaurant',RestaurantSchema);

