import { IUserRepository } from "../repositories/IUserRepository";
import { LoginDto } from "../../dtos/auth/LoginDto";
import { LoginResult } from "../entities/LoginResult";

export interface PasswordService {
  verify(plain: string, hash: string): Promise<boolean>;
  hash(plain: string): Promise<string>;
}

export interface TokenService {
  generate(payload: {
    id: string;
    email: string;
    role: string;
  }): Promise<string>;
}

export class LoginUser {
  constructor(
    private userRepository: IUserRepository,
    private passwordService: PasswordService,
    private tokenService: TokenService
  ) {}

  async execute(loginDto: LoginDto): Promise<LoginResult> {
    // Validate input
    if (!loginDto.email || !loginDto.password) {
      throw new Error("Email and password are required");
    }

    // Find user by email
    const user = await this.userRepository.findByEmail(loginDto.email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Verify password
    const isPasswordValid = await this.passwordService.verify(
      loginDto.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    // Generate JWT token
    const token = await this.tokenService.generate({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    };
  }
}
