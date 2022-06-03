import Config from 'react-native-config';
import {Platform} from 'react-native';

export const getUrl = (path: string) => {
  if (Platform.OS === 'ios') {
    return Config.API_IOS_LOCAL_URL + path;
  } else {
    return Config.API_URL + path;
  }
};

export const buildHeaders = token => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token ? 'Bearer ' + token : undefined,
  };
};

export const buildRequest = async (
  method,
  url,
  data,
  onError,
  onSuccess,
  token,
) => {
  const headers = buildHeaders(token);
  try {
    const response = await fetch(getUrl(url), {
      method: method,
      headers,
      body: JSON.stringify(data),
    });
    if (response.status === 200 || response.status === 201) {
      return onSuccess(response);
    } else {
      return onError();
    }
  } catch (error) {
    return onError();
  }
};
