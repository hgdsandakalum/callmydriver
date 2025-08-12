export interface LoginResult {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
    name: string;
  };
}
