export interface User {
  email: string;
  token: string;
}

export interface UserState {
  value: Partial<User> | null;
  error: string | null;
}
