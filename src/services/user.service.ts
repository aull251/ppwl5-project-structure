import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userService = {
    getAll() {
        const users = userRepository.findAll();
        return users.map(u => new UserModel(u));
    },
    create(data: User) {
        // Tambahkan validasi business logic di sini jika perlu
        return userRepository.create(data);
    },
    delete(id: number) {
        return userRepository.delete(id);
    }
};