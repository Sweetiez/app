import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AccountScreen,
  EditAccountScreen,
  EditPasswordScreen,
  OrdersScreen,
  MyEventsScreen,
} from '../pages';
import colors from '../assets/colors';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Text} from '../atomic/atoms';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {userSelector} from '../store/selectors/user';

const AccountConnectedStack = createNativeStackNavigator();

function AccountConnectedStackScreen() {
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
  const user = useSelector(userSelector);

  return (
    <AccountConnectedStack.Navigator
      screenOptions={{headerMode: Platform.OS === 'ios' ? 'float' : 'screen'}}>
      <AccountConnectedStack.Screen
        name="Account"
        component={AccountScreen}
        options={headerOptions(t('account.title') + user?.firstName)}
      />
      <AccountConnectedStack.Screen
        name="EditAccount"
        component={EditAccountScreen}
        options={headerOptions(t('editAccount.title'))}
      />
      <AccountConnectedStack.Screen
        name="EditPassword"
        component={EditPasswordScreen}
        options={headerOptions(t('editPassword.title'))}
      />
      <AccountConnectedStack.Screen
        name="Orders"
        component={OrdersScreen}
        options={headerOptions(t('orders.title'))}
      />
      <AccountConnectedStack.Screen
        name="MyEvents"
        component={MyEventsScreen}
        options={headerOptions(t('myEvents.title'))}
      />
    </AccountConnectedStack.Navigator>
  );
}

export default AccountConnectedStackScreen;
