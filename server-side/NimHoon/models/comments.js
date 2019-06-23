import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema ({ 
    id: String, // or an auto increment number,
    author: String,     // rates
    quality: Number, // a number between 0-5 
    packaging: Number,     
    deliveryTime: Number,     
    text: String,     
    created_at: Date, // time where comment submitted 
});

const Comment = mongoose.model('Comment',CommentSchema);

export default Comment;