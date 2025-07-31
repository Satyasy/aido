export type UserRole = 'admin' | 'user';

export interface jwtPayload {
  id: string;
  username: string;
  role: UserRole;
}