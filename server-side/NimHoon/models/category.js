var mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,     
    name:String, 
});

module.exports = mongoose.model('Category',CategorySchema);
