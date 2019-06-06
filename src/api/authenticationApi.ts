import UserSubmit from '@/typescript/userSubmit';
import {conduitApi} from './index';
import Authentication from '@/typescript/authentication';

export async function login(userSubmit: UserSubmit): Promise<Authentication | undefined> {
  try {
    const response = await conduitApi.post('/auth/signin', {
      userSubmit,
    });
    return response.data;
  } catch (e) {
    return e;
  }
}
