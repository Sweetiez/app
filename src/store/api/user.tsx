import {LOGIN_ERROR, REGISTER_OK, REGISTER_ERROR} from '../constants';
import {LoginRequest, LoginResponse, RegisterRequest} from '../../model';
import {cleanToken} from '../../utils/user';
import {buildRequest} from '../../utils/api';

export const loginRequest = async (
  loginData: LoginRequest,
): Promise<LoginResponse | typeof LOGIN_ERROR> => {
  return buildRequest(
    'POST',
    '/auth/login',
    loginData,
    () => {
      return LOGIN_ERROR;
    },
    response => {
      return {
        // @ts-ignore
        token: cleanToken(response.headers.map.authorization),
        // @ts-ignore
        refreshToken: cleanToken(response.headers.map['refresh-token']),
      };
    },
    undefined,
  );
};

export const registerRequest = async (
  registerData: RegisterRequest,
): Promise<typeof REGISTER_ERROR | typeof REGISTER_OK> => {
  return buildRequest(
    'POST',
    '/auth/subscribe',
    registerData,
    () => {
      return REGISTER_OK;
    },
    () => {
      return REGISTER_OK;
    },
    undefined,
  );
};
