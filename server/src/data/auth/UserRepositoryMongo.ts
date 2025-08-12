import { IUserRepository } from "../../domain/auth/repositories/IUserRepository";
import { User } from "../../domain/models/User";
import { UserModel } from "../models/UserModel";

export class UserRepositoryMongo implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await UserModel.findOne({ email }).select("+password");
      return user ? this.mapToDomain(user) : null;
    } catch (error) {
      throw new Error("Database error while finding user");
    }
  }

  async create(user: {
    email: string;
    password: string;
    role: "Driver" | "Customer";
    name: string;
  }): Promise<User> {
    const doc = await UserModel.create(this.fromDomain(user));
    return this.mapToDomain(doc);
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

  private fromDomain(user: {
    email: string;
    password: string;
    role: "Driver" | "Customer";
    name: string;
  }) {
    return {
      email: user.email,
      password: user.password,
      role: user.role,
      name: user.name,
    };
  }
}
