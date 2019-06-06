import JwtAuthenticationResponse from './jwtAuthenticationResponse';
import User from './user';

export default interface Authentication {
  jwtAuthenticationResponse: JwtAuthenticationResponse;
  user: User;
  authorities: string[];
}
