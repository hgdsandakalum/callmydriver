import { generateJWT } from "../utils/jwt";
import { TokenService } from "../domain/auth/useCases/LoginUser";

export class TokenServiceImpl implements TokenService {
  async generate(payload: {
    id: string;
    email: string;
    role: string;
  }): Promise<string> {
    return generateJWT(payload);
  }
}
