export enum UserRole {
  ADMIN = 'Admin',
  OFFICER = 'Officer',
  STUDENT = 'Student',
}

export interface JwtPayload {
  userId: number;
  username: string;
  email: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}
