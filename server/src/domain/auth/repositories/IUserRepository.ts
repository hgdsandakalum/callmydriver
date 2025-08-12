import { User } from "../../models/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(user: {
    email: string;
    password: string;
    role: "Driver" | "Customer";
    name: string;
  }): Promise<User>;
}
