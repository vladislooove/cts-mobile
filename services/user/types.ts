export interface IUserService {
  login: (data: LoginPayload) => Promise<LoginResponse>;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  expiresAt: string;
  irrelevantAgreements: string[];
  refreshToken: string;
  tokenType: string;
}