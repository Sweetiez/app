import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen, LoginScreen, RegisterScreen} from '../pages';
import colors from '../assets/colors';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Text} from '../atomic/atoms';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';

const AccountNotConnectedStack = createNativeStackNavigator();

function AccountNotConnectedStackScreen() {
  const headerStyle = {
    backgroundColor: colors.yellow,
    shadowColor: colors.white,
    elevation: 10,
  };
  const headerOptions = (title: string): StackNavigationOptions => ({
    headerStyle,
    headerTintColor: colors.white,
    headerBackTitleVisible: false,
    headerLeft: () => null,
    headerTitle: (): React.ReactNode => (
      <Text content={title} size={30} color={colors.white} />
    ),
    headerTitleAlign: 'center',
  });
  const {t} = useTranslation();
  return (
    <AccountNotConnectedStack.Navigator
      screenOptions={{
        headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
      }}>
      <AccountNotConnectedStack.Screen
        name="Login"
        component={LoginScreen}
        options={headerOptions(t('login.title'))}
      />
      <AccountNotConnectedStack.Screen
        name="Register"
        component={RegisterScreen}
        options={headerOptions(t('register.title'))}
      />
      <AccountNotConnectedStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={headerOptions(t('forgotPassword.title'))}
      />
    </AccountNotConnectedStack.Navigator>
  );
}

export default AccountNotConnectedStackScreen;
