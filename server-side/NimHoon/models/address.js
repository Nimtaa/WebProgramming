import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,     
    city: String, // e.g. Tehran     
    area: String, // e.g. Keshavarz Blvd,     
    addressLine:String, // full address text 
});

const Address = mongoose.model('Address',AddressSchema);

export default Address;