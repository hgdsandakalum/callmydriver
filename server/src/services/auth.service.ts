import { LoginUser } from "../domain/auth/useCases/LoginUser";
import { UserRepositoryMongo } from "../data/auth/UserRepositoryMongo";
import { LoginDto } from "../domain/dtos/auth/LoginDto";
import { LoginResult } from "../domain/auth/entities/LoginResult";
import { PasswordServiceImpl } from "./password.service";
import { TokenServiceImpl } from "./token.service";
import { RegisterUser } from "../domain/auth/useCases/RegisterUser";
import { RegisterDto } from "../domain/dtos/auth/RegisterDto";

export class AuthService {
  private loginUser: LoginUser;
  private registerUser: RegisterUser;

  constructor() {
    const userRepository = new UserRepositoryMongo();
    const passwordService = new PasswordServiceImpl();
    const tokenService = new TokenServiceImpl();
    this.loginUser = new LoginUser(
      userRepository,
      passwordService,
      tokenService
    );
    this.registerUser = new RegisterUser(userRepository, passwordService);
  }

  async login(loginDto: LoginDto): Promise<LoginResult> {
    try {
      return await this.loginUser.execute(loginDto);
    } catch (error) {
      throw error;
    }
  }

  async register(registerDto: RegisterDto): Promise<{
    id: string;
    email: string;
    role: string;
    name: string;
  }> {
    try {
      return await this.registerUser.execute(registerDto);
    } catch (error) {
      throw error;
    }
  }
}
