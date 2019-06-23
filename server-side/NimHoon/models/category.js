import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,     
    name:String, 
});

const Category = mongoose.model('Category',CategorySchema);

export default Category;