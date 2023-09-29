import apiClient from './apiClient';

type LoginResult =
  | {
      status: string;
      accessToken: string;
    }
  | 'fail';

export interface LoginRequest {
  id: string;
  password: string;
}

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  const loginResult = await apiClient.post('/login', {
    id: args.id,
    password: args.password,
  });
  return loginResult ? loginResult.data : 'fail';
};
