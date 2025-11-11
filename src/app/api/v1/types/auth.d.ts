export type UserRole = 'admin' | 'patient';

export interface jwtPayload {
  id: string;
  name: string;
  role: UserRole;
}