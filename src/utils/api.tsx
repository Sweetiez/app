import Config from 'react-native-config';
import {Platform} from 'react-native';

export const getUrl = (path: string) => {
  if (Platform.OS === 'ios') {
    return Config.API_IOS_LOCAL_URL + path;
  } else {
    return Config.API_URL + path;
  }
};
