import Config from 'react-native-config';
import {LOGIN_ERROR} from '../constants';
import {LoginRequest, LoginResponse} from '../../model';
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
    console.error(error);
    return LOGIN_ERROR;
  }
};
