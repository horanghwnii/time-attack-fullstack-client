import { Response } from '@/types/Response.type';
import { client } from '../index.api';
import { LogInDto, SignUpDto } from './auth.dto';

async function signUp(dto: SignUpDto) {
  const response = await client.post<Response>('/auth/sign-up', dto);
  const data = response.data;

  console.log(data);

  // return data;
}

async function logIn(dto: LogInDto) {
  const response = await client.post<Response>('/auth/log-in', dto);
  const data = response.data;

  console.log(data);

  // return data;
}

async function logOut() {}

const authAPI = { signUp, logIn };

export default authAPI;
