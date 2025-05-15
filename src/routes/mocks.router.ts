import { Router } from "express";
import { generateMockPets, generateMockUsers } from "../utils/mocking.utils";
import User from "../models/user.model";
import Pet from "../models/pet.model";
import { PetType } from "../types";
import { UserType } from "../types";

const router = Router();

router.get("/mockingusers", async (req, res) => {
    try {
        const mockUsers = await generateMockUsers(50);
        res.json(mockUsers);
    } catch (error) {
        res.status(500).json({ error: "error generating users" });
    }
});

router.get("/mockingpets", async (req, res) => {
    try {
        const mockPets = await generateMockPets(50);
        res.json(mockPets);
    } catch (error) {
        res.status(500).json({ error: "error generating pets" });
    }
});

router.post("/generateData", async (req, res) => {
    const { users = 0, pets = 0 } = req.body;
    const data = {
        insertedPets: [] as PetType[],
        insertedUsers: [] as UserType[],
    };
    try {
        const generatedUsers = await generateMockUsers(users);
        await User.insertMany(generatedUsers);

        const generatedPets = await generateMockPets(pets);
        await Pet.insertMany(generatedPets);

        data.insertedPets = generatedPets;
        data.insertedUsers = generatedUsers;

        res.status(201).json({
            message: "Mock data inserted successfully",
            data: data,
        });
    } catch (error) {
        res.status(500).json({ error: "Error generating mock data" });
    }
});

export default router;
