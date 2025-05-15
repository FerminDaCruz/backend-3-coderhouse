import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export const generateMockUsers = async (count: number) => {
    const users = [];
    const hashedPassword = await bcrypt.hash("coder123", 10);

    for (let i = 0; i < count; i++) {
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: [],
            password: hashedPassword,
        });
    }
    return users;
};
