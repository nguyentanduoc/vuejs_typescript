import Axois from 'axios';

export const conduitApi = Axois.create({
  baseURL: 'http://localhost:8090/api',
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.common.Authorization;
}
