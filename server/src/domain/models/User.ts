export interface User {
  id: string;
  email: string;
  password: string;
  role: "Driver" | "Customer";
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
