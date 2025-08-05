import { LoginUser } from "../domain/auth/useCases/LoginUser";
import { UserRepositoryMongo } from "../data/auth/UserRepositoryMongo";
import { LoginDto } from "../domain/dtos/auth/LoginDto";
import { LoginResult } from "../domain/auth/entities/LoginResult";

export class AuthService {
  private loginUser: LoginUser;

  constructor() {
    const userRepository = new UserRepositoryMongo();
    this.loginUser = new LoginUser(userRepository);
  }

  async login(loginDto: LoginDto): Promise<LoginResult> {
    try {
      return await this.loginUser.execute(loginDto);
    } catch (error) {
      throw error;
    }
  }
}
