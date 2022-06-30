import {
  LOGIN_ERROR,
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER_ERROR,
  UPDATE_OK,
  UPDATE_ERROR,
  TOKEN_EXPIRED,
  UPDATE_PASSWORD_ERROR,
  UPDATE_PASSWORD_OK,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_OK,
} from '../constants';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User,
  UpdateRequest,
  UpdatePasswordRequest,
  ResetPasswordRequest,
} from '../../model';
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

export const resetPasswordRequest = async (
  resetPasswordData: ResetPasswordRequest,
): Promise<typeof RESET_PASSWORD_OK | typeof RESET_PASSWORD_ERROR> => {
  return buildRequest(
    'PUT',
    '/auth/me/password',
    resetPasswordData,
    () => {
      return RESET_PASSWORD_ERROR;
    },
    () => {
      return RESET_PASSWORD_OK;
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
      return REGISTER_ERROR;
    },
    () => {
      return REGISTER_OK;
    },
    undefined,
  );
};

export const updateMeRequest = async (
  updateData: UpdateRequest,
  token: string,
): Promise<typeof UPDATE_ERROR | typeof UPDATE_OK> => {
  return buildRequest(
    'PUT',
    '/user/me',
    updateData,
    () => {
      return UPDATE_ERROR;
    },
    () => {
      return UPDATE_OK;
    },
    token,
  );
};

export const updatePasswordRequest = async (
  updateData: UpdatePasswordRequest,
  token: string,
): Promise<typeof UPDATE_PASSWORD_ERROR | typeof UPDATE_PASSWORD_OK> => {
  return buildRequest(
    'PUT',
    '/auth/me/password',
    updateData,
    () => {
      return UPDATE_PASSWORD_ERROR;
    },
    () => {
      return UPDATE_PASSWORD_OK;
    },
    token,
  );
};

export const getUserRequest = async (
  token: string,
): Promise<User | typeof GET_USER_ERROR | typeof TOKEN_EXPIRED> => {
  return buildRequest(
    'GET',
    '/user/me',
    undefined,
    response => {
      if (response === '403') {
        return TOKEN_EXPIRED;
      }
      return GET_USER_ERROR;
    },
    response => {
      return response.json();
    },
    token,
  );
};
