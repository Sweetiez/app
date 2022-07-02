import NetInfo from '@react-native-community/netinfo';

export const checkConnectivity = async () => {
  const status = await NetInfo.fetch();
  return status.isConnected;
};
