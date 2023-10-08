import apiClient from './apiClient';

export interface LoginRequest {
  id: string;
  password: string;
}

export interface SignRequest {
  username: string;
  password: string;
  nickname: string;
}

export const login = async (args: LoginRequest) => {
  try {
    const loginResult = await apiClient.post('/api/v1/accounts/token', {
      username: args.id,
      password: args.password,
    });
    return loginResult.data;
  } catch (error) {
    throw new Error('API 요청 중 오류가 발생했습니다.');
  }
};

export const sign = async (args: SignRequest) => {
  try {
    const signResult = await apiClient.post('/api/v1/members', {
      username: args.username,
      password: args.password,
      nickname: args.nickname,
    });

    return signResult.data;
  } catch (error) {
    throw new Error('API 요청 중 오류가 발생했습니다.');
  }
};
