import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CartScreen,
  PaymentScreen,
  ConfirmationScreen,
  ClientInfoScreen,
  AddRewardsScreen,
  PaymentNotAvailableScreen,
} from '../pages';
import colors from '../assets/colors';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Text} from '../atomic/atoms';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
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
    <CartStack.Navigator
      screenOptions={{headerMode: Platform.OS === 'ios' ? 'float' : 'screen'}}>
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={headerOptions(t('cart.title'))}
      />
      <CartStack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={headerOptions(t('confirmation.title'))}
      />
      <CartStack.Screen
        name="Payment"
        component={PaymentScreen}
        options={headerOptions(t('payment.title'))}
      />
      <CartStack.Screen
        name="PaymentNotAvailable"
        component={PaymentNotAvailableScreen}
        options={headerOptions(t('payment.title'))}
      />
      <CartStack.Screen
        name="ClientInfo"
        component={ClientInfoScreen}
        options={headerOptions(t('clientInfo.title'))}
      />
      <CartStack.Screen
        name="AddRewards"
        component={AddRewardsScreen}
        options={headerOptions(t('addRewards.title'))}
      />
    </CartStack.Navigator>
  );
}

export default CartStackScreen;
