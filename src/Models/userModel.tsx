import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
    displayname: string;
    email: string;
    phone: number;
    password: string;
    isVerified: boolean;
    isAdmin: boolean;
    profilePic: string;
    forgotPasswordToken: string;
    forgotPasswordTokenExpiry: Date;
    verifyToken: string;
    verifyTokenExpiry: Date;
}

const userSchema: Schema<User> = new mongoose.Schema({
    displayname: {
        type: String,
        required: [true, 'Please enter display name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter Email'],
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, 'Please enter phone'],
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
    },
    profilePic: {
        type: String,
        required: [true, 'Please enter pic'],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.models.users as mongoose.Model<User> || mongoose.model<User>('users', userSchema);
export default User;