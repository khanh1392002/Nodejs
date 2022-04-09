import mongoose, { Schema } from "mongoose";
const productsSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true,
        unique: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    desc: {
        type: String,
        // required: true
    },
    img: {
        type: String,
        // required: true
    }
   
}, { timestamps: true }) ;
productsSchema.index({'$**': 'text'});
export default mongoose.model('products', productsSchema);