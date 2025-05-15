import mongoose from "mongoose";

export interface PetType {
    name: string;
    animal: string;
}

const petCollection = "pets";

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    animal: { type: String, required: true },
});

const Pet = mongoose.model<PetType>(petCollection, petSchema);
export default Pet;
