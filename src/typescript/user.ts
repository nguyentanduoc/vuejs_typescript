import Role from './role';

export default interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  isEnabled: boolean;
  roles: Role[];
  isAdmin: boolean;
}
