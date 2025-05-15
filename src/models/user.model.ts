import mongoose from "mongoose";

export interface UserType {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    pets: [];
    password: string;
}

const userCollection = "users";

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    pets: { type: Array },
    password: { type: String, required: true },
});

const User = mongoose.model<UserType>(userCollection, userSchema);

export default User;
