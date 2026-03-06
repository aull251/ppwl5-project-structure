import { db } from "../config/db";
import type { User } from "../types/user.type";

export const userRepository = {
    findAll(): User[] {
        return db.query("SELECT * FROM users").all() as User[];
    },
    create(user: User) {
        return db.run("INSERT INTO users (name, role) VALUES (?, ?)", [user.name, user.role]);
    },
    delete(id: number) {
        return db.run("DELETE FROM users WHERE id = ?", [id]);
    }
    };