var mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,     
    city: String, // e.g. Tehran     
    area: String, // e.g. Keshavarz Blvd,     
    addressLine:String, // full address text 
});

module.exports = mongoose.model('Address',AddressSchema);
