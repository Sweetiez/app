import {LOGIN_ERROR, REGISTER_OK, REGISTER_ERROR} from '../constants';
import {LoginRequest, LoginResponse, RegisterRequest} from '../../model';
import {cleanToken} from '../../utils/user';
import {getUrl} from '../../utils/api';

export const loginRequest = async (
  loginData: LoginRequest,
): Promise<LoginResponse | typeof LOGIN_ERROR> => {
  try {
    const response = await fetch(getUrl('/auth/login'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    if (response.status === 200) {
      return {
        // @ts-ignore
        token: cleanToken(response.headers.map.authorization),
        // @ts-ignore
        refreshToken: cleanToken(response.headers.map['refresh-token']),
      };
    } else {
      return LOGIN_ERROR;
    }
  } catch (error) {
    return LOGIN_ERROR;
  }
};
export const registerRequest = async (
  registerData: RegisterRequest,
): Promise<typeof REGISTER_ERROR | typeof REGISTER_OK> => {
  try {
    const response = await fetch(getUrl('/auth/subscribe'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });
    if (response.status === 201) {
      return REGISTER_OK;
    } else {
      return REGISTER_ERROR;
    }
  } catch (error) {
    return REGISTER_ERROR;
  }
};
