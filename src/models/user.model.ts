import type { User } from "../types/user.type";

export class UserModel {
    id?: number;
    name: string;
    role: string;

    constructor(data: User) {
        this.id = data.id;
        this.name = data.name.toUpperCase(); // Contoh logic model
        this.role = data.role;
    }
}