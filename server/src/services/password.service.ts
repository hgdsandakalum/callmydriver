import { comparePassword, hashPassword } from "../utils/password";
import { PasswordService } from "../domain/auth/useCases/LoginUser";

export class PasswordServiceImpl implements PasswordService {
  async verify(plain: string, hash: string): Promise<boolean> {
    return comparePassword(plain, hash);
  }
  async hash(plain: string): Promise<string> {
    return hashPassword(plain);
  }
}
