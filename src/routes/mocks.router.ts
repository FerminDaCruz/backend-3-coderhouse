import { Router } from "express";
import { generateMockUsers } from "../utils/mocking.utils";

const router = Router();

router.get("/mockingusers", async (req, res) => {
    try {
        const mockUsers = await generateMockUsers(50);
        res.json(mockUsers);
    } catch (error) {
        res.status(500).json({ error: "error generating users" });
    }
});

router.get("/mockingpets", (req, res) => {});

router.post("/generateData", async (req, res) => {
    const { users = 0, pets = 0 } = req.body;

    try {
        const generatedUsers = await generateMockUsers(users);
        await UserModel.insertMany(generatedUsers);

        res.status(201).json({ message: "Mock data inserted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error generating mock data" });
    }
});

export default router;
