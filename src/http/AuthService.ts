import API from './index';

export const registerUser = async (userData: { email: string; password: string }) => {
  return await API.post('/auth/register', userData);
};

export const loginUser = async (userData: { email: string; password: string }) => {
  return await API.post('/auth/login', userData);
};
