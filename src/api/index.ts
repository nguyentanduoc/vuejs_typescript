import Axois from 'axios';
import UserSubmit from '@/typescript/userSubmit';
import Authentication from '@/typescript/authentication';

export const conduitApi = Axois.create({
  baseURL: 'http://localhost:8090/api',
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.common.Authorization;
}

export async function login(userSubmit: UserSubmit): Promise<Authentication | undefined> {
  try {
    const response = await conduitApi.post('/auth/signin', {
      usernameOrEmail: userSubmit.usernameOrEmail,
      password: userSubmit.password,
    });
    return response.data as Authentication;
  } catch (e) {
    throw e;
  }
}
