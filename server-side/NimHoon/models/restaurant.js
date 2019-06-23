import mongoose from 'mongoose'

const RestaurantSchema = new mongoose.Schema ({ 
    id: String, // or an autoincreament number,     
    name:String,     
    logo:String, // src of logo image      
    openingTime:Number, // time of opening     
    closingTime:Number, // time of closing     
    averageRate:Number, // average of comments rate     
    address: AddressSchema,      
    categories:[CategorySchema], // array of food categories. e.g. fastfood or irani     
    foods:[FoodSchema],      
    comments:[CommentSchema],
});

const Restaurant = mongoose.model('Restaurant',RestaurantSchema);

export default Restaurant;