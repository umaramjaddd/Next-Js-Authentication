import mongoose, {Document, Schema} from "mongoose";

export interface Product extends Document {
    title: string;
    description: string;
    price: number;
    stock: number;
    isSold: boolean;
    relatedUser: mongoose.Schema.Types.ObjectId;
    images: string[];
}

const productSchema : Schema <Product> = new mongoose.Schema ({
title: {
    type: String,
    required: [true, 'Please enter title'],
},
description : {
    type: String,
    required: [true, 'Please enter description'],
},
price: {
    type: Number,
    required: [true, 'Please enter price'],
},
stock: {
    type: Number,
    required: [true, 'Please enter stock'],
},

isSold: {
    type: Boolean,
    default: false,
},
relatedUser : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
},
images : {
    type: [String],
    required: [true, 'Please add at least one picture'],
    validate: {
        validator: function(value: string[]) {
            return value.length > 0;
        },
        message: 'Please add at least one picture',
    }
}
}
)

const Product =  mongoose.models.products as mongoose.Model<Product> || mongoose.model("products", productSchema);
export default Product;