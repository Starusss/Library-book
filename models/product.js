import mongoose from 'mongoose';

const productchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    images: {
        type: String,
        require: true,
    },
    price:{
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },

}, {timestamps: true});

export default mongoose.model("Product", productchema, 'products')