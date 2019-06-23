import mongoose from 'mongoose'

const FoodSchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,     
    name:String,     
    price:Number, // price of this food in Tomans     
    description:String, // optional     
    foodSet:String, // set of this food like kabab, khorak, salad 
});

const Food = mongoose.model('Food',FoodSchema);

export default Food;