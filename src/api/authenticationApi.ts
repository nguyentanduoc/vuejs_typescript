import UserSubmit from '@/typescript/userSubmit';
import {conduitApi} from './index';
import Authentication from '@/typescript/authentication';

// export function login(userSubmit: UserSubmit): Promise<Authentication> {
//   return conduitApi.post('/auth/signin', userSubmit);
// }
export function login(userSubmit: UserSubmit): Promise<Authentication> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await conduitApi.post('/auth/signin', userSubmit);
      return resolve(response.data as Authentication);
    } catch (e) {
      return reject(e);
    }
  });
}
