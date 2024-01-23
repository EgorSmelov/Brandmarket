export type UserType = {
  id: number;
  name: string;
  email: string;
  roleId: number;
};

export type UserState =
  | { status: 'guest' }
  | { status: 'pending' }
  | ({ status: 'authenticated' } & UserType);

export type UserModerState = {
  users: UserType[];
  user: UserType | null;
  isLoading: boolean;
};

export type AuthState = {
  user: UserState;
  accessToken: string;
};

export type AuthActions =
  | { type: 'LOGIN'; payload: AuthState }
  | { type: 'LOGOUT' }
  | { type: 'LOGIN_GUEST' };

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegistrationFormData = {
  email: string;
  name: string;
  password: string;
};
