import { Response } from '@/types/Response.type';
import { client } from '../index.api';
import { LogInDto, SignUpDto } from './auth.dto';

async function signUp(dto: SignUpDto) {
  const response = await client.post<Response>('/auth/sign-up', dto);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const accessToken = data.result;

  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  // localStorage.setItem('accessToken', String(accessToken));

  return accessToken;
}

async function logIn(dto: LogInDto) {
  const response = await client.post<Response>('/auth/log-in', dto);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const accessToken = data.result;

  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  // localStorage.setItem('accessToken', String(accessToken));

  return accessToken;
}

async function logOut() {
  // localStorage.clear();
  client.defaults.headers.common.Authorization = '';
}

const authAPI = { signUp, logIn, logOut };

export default authAPI;
