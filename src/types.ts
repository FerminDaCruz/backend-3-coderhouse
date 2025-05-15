export interface PetType {
    name: string;
    animal: string;
}

export interface UserType {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    pets: [];
    password: string;
}
