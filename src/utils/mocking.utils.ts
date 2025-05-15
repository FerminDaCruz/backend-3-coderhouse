import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import { PetType } from "../models/pet.model";
import { UserType } from "../models/user.model";

export const generateMockUsers = async (count: number) => {
    const users = [] as UserType[];
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

export const generateMockPets = async (count: number) => {
    const pets = [] as PetType[];

    for (let i = 0; i < count; i++) {
        pets.push({
            name: faker.animal.petName(),
            animal: faker.animal.type(),
        });
    }
    return pets;
};
