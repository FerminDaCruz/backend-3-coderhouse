import mongoose from "mongoose";
import { PetType } from "../types";

const petCollection = "pets";

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    animal: { type: String, required: true },
});

const Pet = mongoose.model<PetType>(petCollection, petSchema);
export default Pet;
