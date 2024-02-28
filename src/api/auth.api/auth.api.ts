import { Response } from '@/types/Response.type';
import { client } from '../index.api';
import { LogInDto, SignUpDto } from './auth.dto';

async function signUp(dto: SignUpDto) {
  const response = await client.post<Response>('/auth/sign-up', dto);
  const data = response.data;
  const accessToken = data.result;

  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return accessToken;
}

async function logIn(dto: LogInDto) {
  const response = await client.post<Response>('/auth/log-in', dto);
  const data = response.data;
  const accessToken = data.result;

  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return accessToken;
}

async function logOut() {}

const authAPI = { signUp, logIn };

export default authAPI;
