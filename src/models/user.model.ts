import mongoose from "mongoose";

const userCollection = "user";

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    pets: { type: mongoose.Schema.Types.ObjectId, ref: "pets" },
    password: { type: String, required: true },
});

const User = mongoose.model(userCollection, userSchema);

export default User;
