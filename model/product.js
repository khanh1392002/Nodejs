import mongoose, { Schema } from "mongoose";
const productsSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Object,
        ref: "Category"
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
   
}, { timestamps: true }) ;
export default mongoose.model('products', productsSchema);