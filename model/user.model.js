import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        unique: true,
        type: String
    },
    password: String,
    dateOfBirth: Date,
    lgpd: Boolean,
    documents: [
        {
            label: String,
            value: String
        }
    ]
})

export const UserModel = mongoose.model("Users", userSchema)