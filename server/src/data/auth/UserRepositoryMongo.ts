import { IUserRepository } from "../../domain/auth/repositories/IUserRepository";
import { User } from "../../domain/models/User";
import { UserModel } from "../models/UserModel";
import { comparePassword } from "../../utils/password";
import { generateJWT } from "../../utils/jwt";

export class UserRepositoryMongo implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await UserModel.findOne({ email }).select("+password");
      return user ? this.mapToDomain(user) : null;
    } catch (error) {
      throw new Error("Database error while finding user");
    }
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return comparePassword(password, hash);
  }

  async generateToken(user: User): Promise<string> {
    return generateJWT({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  }

  private mapToDomain(userDoc: any): User {
    return {
      id: userDoc._id.toString(),
      email: userDoc.email,
      password: userDoc.password,
      role: userDoc.role,
      name: userDoc.name,
      createdAt: userDoc.createdAt,
      updatedAt: userDoc.updatedAt,
    };
  }
}
