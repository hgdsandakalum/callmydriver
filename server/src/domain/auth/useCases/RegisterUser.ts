import { IUserRepository } from "../repositories/IUserRepository";
import { RegisterDto } from "../../dtos/auth/RegisterDto";
import { PasswordService } from "./LoginUser";

export class RegisterUser {
  constructor(
    private userRepository: IUserRepository,
    private passwordService: PasswordService
  ) {}

  async execute(
    dto: RegisterDto
  ): Promise<{ id: string; email: string; role: string; name: string }> {
    if (!dto.email || !dto.password || !dto.role || !dto.name) {
      throw new Error("All fields are required");
    }

    const existing = await this.userRepository.findByEmail(dto.email);
    if (existing) {
      throw new Error("User already exists");
    }

    const hashed = await this.passwordService.hash(dto.password);

    const user = await this.userRepository.create({
      email: dto.email,
      password: hashed,
      role: dto.role,
      name: dto.name,
    });

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    };
  }
}
