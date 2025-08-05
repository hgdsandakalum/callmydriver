import { User } from "../../models/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  verifyPassword(password: string, hash: string): Promise<boolean>;
  generateToken(user: User): Promise<string>;
}
